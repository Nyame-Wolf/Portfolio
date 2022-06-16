const openToggle = document.getElementById("open-toggle");
const title = document.getElementById("title");
const mobileLinks = document.getElementById("mobile-links");

openToggle.addEventListener("click", () => {
  mobileLinks.classList.toggle("open");
  openToggle.style.display = "none";
  title.style.display = "none";
});
mobileLinks.addEventListener("click", () => {
  openToggle.style.display = "block";
  title.style.display = "block";
  mobileLinks.classList.toggle("open");
});

const email = document.getElementById("user-email").value;
const errM = document.querySelector(".errorMessage");

const message = "";
myRegex = /[A-Z]/;


const emailError = document.getElementById('footer-b')
form.addEventListener('submit', (event) =>{

})
const form  = document.getElementById('dsk-form');

form.addEventListener('submit', (event) => {
  if (myRegex.test(email)) {
    message = "Email field should only have <strong>lowercase</strong> letters";
    event.preventDefault();
  }
    
});