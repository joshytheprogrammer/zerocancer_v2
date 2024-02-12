document.addEventListener("DOMContentLoaded", function() {
    // Get references to the read more and read less links
    var readMoreLink = document.getElementById("aboutReadMoreLink");
    var readLessLink = document.getElementById("aboutReadLessLink");

    // Get reference to the moreAboutContent div
    var moreAboutContent = document.getElementById("moreAboutContent");

    // Set initial state - hide "Read less" link and more content
    readLessLink.style.display = "none";
    moreAboutContent.style.display = "none";

    // Add click event listener to the "Read more" link
    readMoreLink.addEventListener("click", function() {
        // Toggle the visibility of the content and links
        moreAboutContent.style.display = "block";
        readMoreLink.style.display = "none";
        readLessLink.style.display = "block";
    });

    // Add click event listener to the "Read less" link
    readLessLink.addEventListener("click", function() {
        // Toggle the visibility of the content and links
        moreAboutContent.style.display = "none";
        readMoreLink.style.display = "block";
        readLessLink.style.display = "none";
    });

    // Get references to the read more and read less links in the second section
    var readMoreLinkDvss = document.getElementById("dvssReadMoreLink");
    var readLessLinkDvss = document.getElementById("dvssReadLessLink");

    // Get reference to the moreAboutContent div in the second section
    var moreAboutContentDvss = document.querySelector(".dvss #moreAboutContent");

    // Set initial state - hide "Read less" link and more content
    readLessLinkDvss.style.display = "none";
    moreAboutContentDvss.style.display = "none";

    // Add click event listener to the "Read more" link in the second section
    readMoreLinkDvss.addEventListener("click", function() {
        // Toggle the visibility of the content and links in the second section
        moreAboutContentDvss.style.display = "block";
        readMoreLinkDvss.style.display = "none";
        readLessLinkDvss.style.display = "block";
    });

    // Add click event listener to the "Read less" link in the second section
    readLessLinkDvss.addEventListener("click", function() {
        // Toggle the visibility of the content and links in the second section
        moreAboutContentDvss.style.display = "none";
        readMoreLinkDvss.style.display = "block";
        readLessLinkDvss.style.display = "none";
    });

    const toggleMenu = document.querySelector('.toggleMenu');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-btn');

    toggleMenu.addEventListener('click', function () {
        mobileNav.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        mobileNav.style.display = 'none';
    });
});
