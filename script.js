const openToggle = document.getElementById('open-toggle');
const title = document.getElementById('title');
const mobileLinks = document.getElementById('mobile-links');

openToggle.addEventListener('click', () => {
  mobileLinks.classList.toggle('open');
  openToggle.style.display = 'none';
  title.style.display = 'none';
});
mobileLinks.addEventListener('click', () => {
  openToggle.style.display = 'block';
  title.style.display = 'block';
  mobileLinks.classList.toggle('open');
});

const myRegex = /[A-Z]/;
const form = document.querySelector('.dsk-form');
form.addEventListener('submit', (event) => {
  const { email } = form.elements;
  const emailEntered = email.value;
  const errM = document.querySelector('.errorMessage');
  if (myRegex.test(emailEntered) === true) {
    event.preventDefault();
    const message = 'Email field should only have <strong>lowercase</strong> letters';
    if (message !== '') {
      errM.innerHTML = message;
      errM.style.display = 'block';
    }
  }
});
