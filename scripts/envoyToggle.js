document.addEventListener("DOMContentLoaded", function () {
  const listEnvoyButton = document.getElementById("listEnvoyButton");
  const hideEnvoyButton = document.getElementById("hideEnvoyButton");
  const envoyTable = document.getElementById("envoyTable");
  const slideMenu = document.getElementById("envoySlideMenu")
  const viewIteminEnvoy = document.getElementById("viewItemInEnvoyTableSpan");
  const closeEnvoyMenu = document.getElementById("closeSlideMenuItem");

  // Add click event listeners to buttons
  listEnvoyButton.addEventListener("click", function () {
    listEnvoyButton.style.display = "none";
    hideEnvoyButton.style.display = "block";
    
    envoyTable.style.display = "block";
  });

  hideEnvoyButton.addEventListener("click", function () {
    listEnvoyButton.style.display = "block";
    hideEnvoyButton.style.display = "none";
    
    envoyTable.style.display = "none";
  });

  viewIteminEnvoy.addEventListener("click", function () {
    slideMenu.classList.toggle("slide-menu-active");
  });

  closeEnvoyMenu.addEventListener("click", function () {
    slideMenu.classList.toggle("slide-menu-active");
  })

});