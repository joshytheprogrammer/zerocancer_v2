import { db, collection, getDocs } from "../firebase.js";

const listEnvoyButton = document.getElementById("listEnvoyButton");
const hideEnvoyButton = document.getElementById("hideEnvoyButton");
const envoyTable = document.getElementById("envoyTable");
const loadingIndicator2 = document.getElementById('loadingIndicator2');
const slideMenu = document.getElementById("envoySlideMenu");
const closeEnvoyMenu = document.getElementById("closeSlideMenuItem");

const fetchEnvoys = async () => {
  try {
    const data = [];

    const envoysSnapshot = await getDocs(collection(db, "envoys"));

    envoysSnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    loadingIndicator2.style.display = 'none'

    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
  }
};

const envoys = await fetchEnvoys();

// Add click event listeners to buttons
listEnvoyButton.addEventListener("click", async function () {
  listEnvoyButton.style.display = "none";
  hideEnvoyButton.style.display = "flex";

  envoyTable.style.display = "block";

  
  populateTable(envoys);
});

hideEnvoyButton.addEventListener("click", function () {
  listEnvoyButton.style.display = "flex";
  hideEnvoyButton.style.display = "none";

  envoyTable.style.display = "none";
});

envoyTable.addEventListener("click", function (event) {
  if (event.target.classList.contains("envoySpanViewLink")) {
    const selectedItemId = event.target.getAttribute("data-id");
    const selectedEnvoy = findEnvoyById(selectedItemId);

    if (selectedEnvoy) {
      // Populate the slide menu with the selected envoy data
      populateSlideMenu(selectedEnvoy);

      // Toggle the slide menu
      slideMenu.classList.add("slide-menu-active");
    } else {
      alert("Envoy not found with the specified ID.");
    }
  }
});

closeEnvoyMenu.addEventListener("click", function () {
  slideMenu.classList.remove("slide-menu-active");
});

const populateTable = (envoys) => {
  const tbody = envoyTable.querySelector("tbody");
  tbody.innerHTML = "";

  envoys.forEach((envoy) => {
    const row = document.createElement("tr");
    const formattedDate = envoy.dateAdded.toDate().toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    
    row.innerHTML = `
      <td>
        <div class="name">
          <img src="${envoy.profileImage}" alt="profile">
          <span>${envoy.fullName}</span>
        </div>
      </td>
      <td>${envoy.placeOfWork}</td>
      <td>${formattedDate}</td>
      <td>
        <span class="l envoySpanViewLink" data-id="${envoy.id}">View</span>
      </td>
    `;

    tbody.appendChild(row);
  });
};

const findEnvoyById = (id) => {
  return envoys.find((envoy) => envoy.id === id);
};

const populateSlideMenu = (envoy) => {
  const profileImage = slideMenu.querySelector(".body img");
  const name = slideMenu.querySelector(".fi_ .key");
  const title = slideMenu.querySelector(".fi_ .value");
  const placeOfWork = slideMenu.querySelector(".se_ .value");
  const visionLink = slideMenu.querySelector(".th_ .value a");
  const visionStatement = slideMenu.querySelector(".fif_ .value");
  const specialtiesContainer = slideMenu.querySelector(".fo_ .value.s");
  const membershipsContainer = slideMenu.querySelector(".six_ .value.m");
  const qualificationsContainer = slideMenu.querySelector(".sev_ .value.q");

  // Add other elements you want to populate in the slide menu
  profileImage.src = envoy.profileImage;
  profileImage.alt = 'profile for ' + envoy.fullName + ' in zero cancer envoy list.';
  name.textContent = envoy.fullName;
  title.textContent = envoy.title;
  placeOfWork.textContent = envoy.placeOfWork;
  visionStatement.textContent = envoy.visionStatement;
  visionLink.href = envoy.visionLink;
  visionLink.textContent = envoy.fullName.toLowerCase().replace(/ /g, "_") + "_vision_statement";

  // Populate Specialties
  specialtiesContainer.textContent = "";
  envoy.specialties.forEach((specialty) => {
    const specialtyElement = document.createElement("div");
    specialtyElement.classList.add("t");
    specialtyElement.textContent = specialty.label;
    specialtiesContainer.appendChild(specialtyElement);
  });

  // Populate Memberships
  membershipsContainer.textContent = "";
  envoy.memberships.forEach((membership) => {
    const membershipElement = document.createElement("div");
    membershipElement.classList.add("t");
    membershipElement.textContent = membership.label;
    membershipsContainer.appendChild(membershipElement);
  });

  // Populate Qualifications
  qualificationsContainer.textContent = "";
  envoy.qualifications.forEach((qualification) => {
    const qualificationElement = document.createElement("div");
    qualificationElement.classList.add("t");
    qualificationElement.textContent = qualification.label;
    qualificationsContainer.appendChild(qualificationElement);
  });
};


