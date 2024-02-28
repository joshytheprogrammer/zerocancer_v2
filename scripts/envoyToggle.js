// import { db, collection, getDocs } from "../firebase.js";

// const listEnvoyButton = document.getElementById("listEnvoyButton");
// const hideEnvoyButton = document.getElementById("hideEnvoyButton");
// const envoyTable = document.getElementById("envoyTable");
// const slideMenu = document.getElementById("envoySlideMenu")
// const viewIteminEnvoy = document.getElementById("viewItemInEnvoyTableSpan");
// const closeEnvoyMenu = document.getElementById("closeSlideMenuItem");

// // Add click event listeners to buttons
// listEnvoyButton.addEventListener("click", function () {
//   listEnvoyButton.style.display = "none";
//   hideEnvoyButton.style.display = "block";
  
//   envoyTable.style.display = "block";
// });

// hideEnvoyButton.addEventListener("click", function () {
//   listEnvoyButton.style.display = "block";
//   hideEnvoyButton.style.display = "none";
  
//   envoyTable.style.display = "none";
// });

// viewIteminEnvoy.addEventListener("click", function () {
//   slideMenu.classList.toggle("slide-menu-active");
// });

// closeEnvoyMenu.addEventListener("click", function () {
//   slideMenu.classList.toggle("slide-menu-active");
// });

// const fetchEnvoys = async () => {
//   try {
//     const data = [];

//     const envoysSnapshot = await getDocs(collection(db, 'envoys'));

//     envoysSnapshot.forEach((doc) => {
//       data.push({ id: doc.id, ...doc.data() });
//     });
    
//     return data;
//   } catch (error) {
//     console.error('Error fetching data from Firestore:', error);
//   }
// }

// const envoys = await fetchEnvoys();
// console.log(envoys)

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
  hideEnvoyButton.style.display = "block";

  envoyTable.style.display = "block";

  
  populateTable(envoys);
});

hideEnvoyButton.addEventListener("click", function () {
  listEnvoyButton.style.display = "block";
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
    row.innerHTML = `
      <td>
        <div class="name">
          <img src="${envoy.profileImage}" alt="profile">
          <span>${envoy.name}</span>
        </div>
      </td>
      <td>${envoy.placeOfWork}</td>
      <td>${envoy.dateAdded}</td>
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
  const name = slideMenu.querySelector(".fi_ .key"); // Updated selector
  const title = slideMenu.querySelector(".fi_ .value"); // Updated selector
  const placeOfWork = slideMenu.querySelector(".se_ .value"); // Updated selector
  const visionLink = slideMenu.querySelector(".th_ .value a"); // Updated selector
  const specialtiesContainer = slideMenu.querySelector(".fo_ .value.s");

  // Add other elements you want to populate in the slide menu
  profileImage.src = envoy.profileImage;
  profileImage.alt = 'profile for '+envoy.name+' in zero cancer envoy list.'
  name.textContent = envoy.name;
  title.textContent = envoy.title;
  placeOfWork.textContent = envoy.placeOfWork;
  visionLink.href = envoy.visionLink;
  visionLink.textContent = envoy.name.toLowerCase().replace(/ /g, "_") + "_vision_statement";

  specialtiesContainer.textContent = ""

  envoy.specialties.forEach((specialty) => {
    const specialtyElement = document.createElement("div");
    specialtyElement.classList.add("t");
    specialtyElement.textContent = specialty;
    specialtiesContainer.appendChild(specialtyElement);
  });
};

