import { toggleReadMoreLess } from './scripts/readMoreLess.js';
import { initMobileMenu } from './scripts/mobileMenu.js';

document.addEventListener("DOMContentLoaded", function () {
    // Read more/less in the first section
    var readMoreLink = document.getElementById("aboutReadMoreLink");
    var readLessLink = document.getElementById("aboutReadLessLink");
    var moreAboutContent = document.getElementById("moreAboutContent");
    toggleReadMoreLess(readMoreLink, readLessLink, moreAboutContent);

    // Read more/less in the second section
    var readMoreLinkDvss = document.getElementById("dvssReadMoreLink");
    var readLessLinkDvss = document.getElementById("dvssReadLessLink");
    var moreAboutContentDvss = document.querySelector(".dvss #moreAboutContent");
    toggleReadMoreLess(readMoreLinkDvss, readLessLinkDvss, moreAboutContentDvss);

    // Mobile menu
    const toggleMenu = document.querySelector('.toggleMenu');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelectorAll('.mobile-nav a');
    initMobileMenu(toggleMenu, mobileNav, closeBtn, navLinks);
});
