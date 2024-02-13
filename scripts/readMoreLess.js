export function toggleReadMoreLess(readMoreLink, readLessLink, moreAboutContent) {
  readMoreLink.addEventListener("click", function () {
      moreAboutContent.style.display = "block";
      readMoreLink.style.display = "none";
      readLessLink.style.display = "block";
  });

  readLessLink.addEventListener("click", function () {
      moreAboutContent.style.display = "none";
      readMoreLink.style.display = "block";
      readLessLink.style.display = "none";
  });
}
