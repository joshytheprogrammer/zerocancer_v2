document.addEventListener('DOMContentLoaded', function() {
    var readMoreLink = document.getElementById('readMoreLink');
    var readLessLink = document.getElementById('readLessLink');
    var moreAboutContent = document.getElementById('moreAboutContent');
    var additionalImage = document.getElementById('additionalImage');
    var lastParagraph = document.getElementById('lastParagraph');

    // Initially hide the "Read Less" link, additional content, and the duplicate image
    readLessLink.style.display = 'none';
    moreAboutContent.style.display = 'none';
    additionalImage.style.display = 'none';

    readMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        moreAboutContent.style.display = 'block';
        readMoreLink.style.display = 'none';
        readLessLink.style.display = 'inline';
        additionalImage.style.display = 'none'; // Hide the duplicate image

        // Append the image to the last paragraph
        lastParagraph.appendChild(additionalImage);

        moreAboutContent.scrollIntoView({ behavior: 'smooth' });
    });

    readLessLink.addEventListener('click', function(event) {
        event.preventDefault();
        moreAboutContent.style.display = 'none';
        readMoreLink.style.display = 'inline';
        readLessLink.style.display = 'none';
        additionalImage.style.display = 'block'; // Show the duplicate image

        // Move the image back to its original position
        document.getElementById('imageContainer').appendChild(additionalImage);
    });
});

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('toggle_btn i')
const dropDownMenu = document.querySelector('dropdown_menu')

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isopen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isopen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}