import { db, collection, getDocs } from "./firebase.js";

const expCont = document.getElementById('expCont');
const loadingIndicator = document.getElementById('loadingIndicator');
const searchCentreButton = document.getElementById('searchCentreButton');

const modalContainer = document.getElementById('modalContainer');
const modalTitle = document.getElementById('modalTitle');
const cardContainer = document.getElementById('cardContainer');
const closeModalXSpan = document.getElementById('closeModalXSpan');

const fetchDataFromFirestore = async () => {
  try {
    const data = {
      states: [],
      regions: [],
      centres: [],
    };

    const [stateSnapshot, regionSnapshot, centreSnapshot] = await Promise.all([
      getDocs(collection(db, 'locations', 'states', 'state')),
      getDocs(collection(db, 'locations', 'regions', 'region')),
      getDocs(collection(db, 'locations', 'centres', 'centre')),
    ]);

    stateSnapshot.forEach((doc) => {
      data.states.push({ id: doc.id, ...doc.data() });
    });

    regionSnapshot.forEach((doc) => {
      data.regions.push({ id: doc.id, ...doc.data() });
    });

    centreSnapshot.forEach((doc) => {
      data.centres.push({ id: doc.id, ...doc.data() });
    });

    loadingIndicator.style.display = 'none';
    expCont.style.display = '';
    return data;
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
  }
};


// Call the function to fetch data
const data = await fetchDataFromFirestore();

const stateSelect = document.getElementById('state');
const regionSelect = document.getElementById('region');

// Populate state select options
data.states.forEach((state) => {
  const option = document.createElement('option');
  option.value = state.id;
  option.textContent = state.name;
  stateSelect.appendChild(option);
});

// Populate region select
stateSelect.addEventListener('change', () => {
  regionSelect.innerHTML = '<option value="" disabled selected>Select Region</option>';

  const selectedStateId = stateSelect.value;
  const selectedState = data.states.find((state) => state.id === selectedStateId);

  selectedState.regions.forEach((regionId) => {
    const matchingRegion = data.regions.find((region) => region.id === regionId);
    if (matchingRegion) {
      const option = document.createElement('option');
      option.value = matchingRegion.id;
      option.textContent = matchingRegion.name;
      regionSelect.appendChild(option);
    }
  });
});

regionSelect.addEventListener('change', () => {
  searchCentreButton.removeAttribute('disabled');
});

// Event listener for search button click
searchCentreButton.addEventListener('click', () => {
  const selectedRegionId = regionSelect.value;
  const selectedRegion = data.regions.find((region) => region.id === selectedRegionId);

  // Extract centre IDs from the selectedRegion
  const centreIds = selectedRegion.centres;

  // Use the centre IDs to filter the relevant centres from data.centres
  const relevantCentres = data.centres.filter((centre) => centreIds.includes(centre.id));

  showModal(relevantCentres);
});

const showModal = (centres) => {
  modalTitle.textContent = 'Centres Available';
  
  centres.sort((a, b) => {
    if (a.isSeller && !b.isSeller) {
      return -1; // a comes before b
    } else if (!a.isSeller && b.isSeller) {
      return 1; // b comes before a
    } else {
      return 0; // leave the order unchanged
    }
  });

  centres.forEach((centre) => {
    cardContainer.innerHTML += `
    <h2>${centre.name}</h2>
    <p>${centre.managerName}</p>

    <div class="card">
      <div class="badges">
        <div class="badge">${centre.services}</div>
        ${centre.isSeller ? '<div class="sBadge">Seller</div>' : ''}
      </div>
      <div class="loc">
        <p>${centre.name} is located here</p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
          <a class="address" href="${centre.mapsLink}" target="_blank">
            <span>(${centre.address.substring(0, 24)}...)</span> 
            <span>Find on maps</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 2048 2048"><path fill="currentColor" d="M2048 0v1664h-384v384H0V384h384V0zm-128 1536V128H512v256h256v128H128v1408h1408v-640h128v256zm-979-339l-90-90l594-595h-421V384h640v640h-128V603z"/></svg>
          </a>
        </p>
      </div>
      <div class="inq">
        <p>For inquiries</p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
            <span>
              ${centre.phone.split(',').map((number) => `<a href="tel:${number.trim()}" class="phoneLink">${number.trim()}</a>`).join(', ')} 
            </span>
          </p>
      </div>
      <a class="schedule" href="${centre.formLink}" >${centre.isSeller ? 'Schedule a Purchase' : 'Schedule an appointment'}</a>
    </div>
    `;
  });

  
  modalContainer.style.display = 'flex';
};

const closeModal = () => {
  cardContainer.innerHTML = '';
  modalContainer.style.display = 'none';
};

closeModalXSpan.addEventListener('click', closeModal);

window.onclick = (event) => {
  if (event.target === modalContainer) {
    closeModal();
  }
};
