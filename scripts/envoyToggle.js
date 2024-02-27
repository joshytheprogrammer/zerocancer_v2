document.addEventListener("DOMContentLoaded", function () {
  const listEnvoyButton = document.getElementById("listEnvoyButton");
  const hideEnvoyButton = document.getElementById("hideEnvoyButton");
  const envoyTable = document.getElementById("envoyTable");

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
});
