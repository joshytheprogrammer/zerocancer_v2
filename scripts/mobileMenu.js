export function initMobileMenu(toggleMenu, mobileNav, closeBtn, navLinks) {
  function closeMobileMenu() {
      mobileNav.style.display = 'none';
  }

  toggleMenu.addEventListener('click', function () {
      mobileNav.style.display = 'flex';
  });

  closeBtn.addEventListener('click', closeMobileMenu);

  window.addEventListener('beforeunload', closeMobileMenu);

  navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
  });
}
