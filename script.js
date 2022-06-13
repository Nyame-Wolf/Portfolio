const openToggle = document.getElementById("open-toggle");
const title = document.getElementById("title");
const mobileLinks = document.getElementById("mobile-links");

openToggle.addEventListener("click", () => {
  mobileLinks.classList.toggle("open");
  openToggle.style.display = "none";
  title.style.display = "none";

});
