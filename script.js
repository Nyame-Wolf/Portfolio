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

const modal = document.querySelector(".dsk-width");
const modalBtns = document.querySelectorAll(".button-orange");
const closeBtn = document.getElementsByClassName("close-btn")[0];

modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

const details = [
  {
    title: "Keeping track of hundreds of components website",
    featuredImage: {
      src: "assets/Snapshoot Portfolio.png",
      alt: "featured image",
    },
    technologies: ["html", "bootstrap", "Ruby on rails"],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it 1960s with the releaLorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it
              1960s with the releax map lapora verita.`,
    liveVersion: "See live",
    source: "See Source",
  },
];

const desktopTitle = document.querySelector(".dsk-popup-title");
const desktopP = document.querySelector(".dsk-txt");

details.forEach((detail) => {
  const popupTitle = document.createElement("H2");
  const titleTxt = document.createTextNode(`${detail.title}`);
  popupTitle.appendChild(titleTxt);
  desktopTitle.appendChild(popupTitle);

  let list = "";
  function createLinks(array) {
    array.forEach((item) => {
      list += `<li> <a  class="is-link" href="#">${item}</a></li>`;
    });
    return list;
  }
  document.querySelector(".dsk-popup-links").innerHTML = createLinks(
    detail.technologies
  );

  const image = document.createElement("IMG");
  image.setAttribute("src", details[0].featuredImage.src);
  image.setAttribute("alt", details[0].featuredImage.src);
  document.querySelector(".dsk-popup-img").appendChild(image);

  const detailP = document.createElement("p");
  const pText = document.createTextNode(`${detail.description}`);
  detailP.appendChild(pText);
  desktopP.appendChild(detailP);

  document.querySelector(
    ".live"
  ).innerHTML = `<button type="submit" class="is-link"><span>${detail.liveVersion}</span>    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
</span></button>`;

  document.querySelector(
    ".source"
  ).innerHTML = `<button type="submit" class="is-link"><span>${detail.source}</span>    <span><i class="fa fa-github" aria-hidden="true"></span></button>`;
});
