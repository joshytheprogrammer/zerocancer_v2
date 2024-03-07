document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners for tab buttons
  var tab1Button = document.getElementById('vTab1-btn');
  var tab2Button = document.getElementById('vTab2-btn');

  tab1Button.addEventListener('click', function() {
    showTab('vTab1', tab1Button);
  });

  tab2Button.addEventListener('click', function() {
    showTab('vTab2', tab2Button);
  });

  function showTab(tabId, tabButton) {
      // Hide all tabs
      var tabs = document.querySelectorAll('.tab-content');
      tabs.forEach(function(tab) {
          tab.classList.remove('active');
      });

      // Hide all tab buttons
      var tabButtons = document.querySelectorAll('.tab');
      tabButtons.forEach(function(button) {
          button.classList.remove('active');
      });

      // Show the selected tab
      var selectedTab = document.getElementById(tabId);
      if (selectedTab) {
        selectedTab.classList.add('active');
      }

      // Add 'active' class to the clicked tab button
      tabButton.classList.add('active');
  }
});
