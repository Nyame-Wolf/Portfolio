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

function createLinks(array) {
  let list = '';
  array.forEach((item) => {
    list += `<li> <a  class="is-link" href="#">${item}</a></li>`;
  });
  return list;
}
// function createLinks(array) {
//   const list = document.createElement("ul");
//   array.forEach((item) => {
//     list.innerHTML = `<li> <a  class="is-link" href="#">${item}</a></li>`;
//   });
//   return list;
// }

/* grid first article */
const articleOne = {
  sectionTitle: 'My Recent Works',
  sectionImage: {
    src: 'assets/ImgPlaceholder@2x.png',
    alt: 'section image',
  },
  articleOneTitle: 'Multi-Post Stories',
  itemParagraph: `A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a standard
              dummy text.`,
  technologyA1: ['css', 'html', 'bootstrap', 'Ruby'],
  projectBtn: 'See Project',
};

const sTitle = document.querySelector('.works-title');
const article1Title = document.querySelector('.item1-description');

const sPopupTitle = document.createElement('H2');
const titleHr = document.createElement('hr');
const sTitleTxt = document.createTextNode(`${articleOne.sectionTitle}`);
sPopupTitle.appendChild(sTitleTxt);
sTitle.appendChild(sPopupTitle);
sTitle.appendChild(titleHr);

const imageItem1 = document.createElement('IMG');
imageItem1.setAttribute('src', articleOne.sectionImage.src);
imageItem1.setAttribute('alt', articleOne.sectionImage.src);
document.querySelector('.sectionImg').appendChild(imageItem1);
const ulLinks = document.querySelector('.button-light');

const a1Title = document.createElement('h3');
const aTitleTxt = document.createTextNode(`${articleOne.articleOneTitle}`);
a1Title.appendChild(aTitleTxt);
article1Title.insertBefore(a1Title, ulLinks);

const a1P = document.createElement('p');
const a1PTxt = document.createTextNode(`${articleOne.itemParagraph}`);
a1P.appendChild(a1PTxt);
article1Title.insertBefore(a1P, ulLinks);

ulLinks.innerHTML = createLinks(articleOne.technologyA1);

const buttonSm = document.querySelector('.button-orange-sm');

const buttonSmall = document.createElement('button');
const buttonSmallTxt = document.createTextNode(`${articleOne.projectBtn}`);
buttonSmall.type = 'submit';
buttonSmall.appendChild(buttonSmallTxt);
buttonSm.appendChild(buttonSmall);
buttonSmall.classList.add('is-link', 'button-orange', 'button-sm');

// gridProjects
const articles = [
  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
  },
  {
    title: 'Profesional Art Printing Data',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
  },
];

function createArticleLinks(techTags) {
  const ul = document.createElement('ul');
  ul.classList.add('link', 'button-dark', 'link-item');

  techTags.forEach((tag) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('is-link');

    a.textContent = tag;

    li.appendChild(a);
    ul.appendChild(li);
  });

  return ul;
}
function createH4(h) {
  const h4 = document.createElement('h4');
  h4.textContent = h;
  return h4;
}

function createp(para) {
  const p = document.createElement('p');
  p.textContent = para;
  return p;
}

function createButton(cbutton) {
  const button = document.createElement('button');
  button.classList.add('button-orange', 'is-link');
  button.textContent = cbutton;
  return button;
}
function createArticle(articleContent) {
  const article = document.createElement('article');
  article.classList.add('works');

  const worksDescription = document.createElement('div');
  worksDescription.classList.add('works-description');

  const h4tag = createH4(articleContent.title);
  const para = createp(articleContent.paragraph);
  const links = createArticleLinks(articleContent.technologyArticle);
  const buttonOrange = createButton(articleContent.prjBtn);

  worksDescription.appendChild(h4tag);
  worksDescription.appendChild(para);
  worksDescription.appendChild(links);
  worksDescription.appendChild(buttonOrange);

  article.appendChild(worksDescription);

  return article;
}

function createArticles(content) {
  const grid = document.querySelector('.works-grid');

  content.forEach((article) => {
    const art = createArticle(article);
    grid.appendChild(art);
  });
}

createArticles(articles);

// modal popup
const modal = document.querySelector('.dsk-width');
const modalBtns = document.querySelectorAll('.button-orange');
const closeBtn = document.getElementsByClassName('close-btn')[0];

modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

const details = [
  {
    title: 'Keeping track of hundreds of components website',
    featuredImage: {
      src: 'assets/Snapshoot Portfolio.png',
      alt: 'featured image',
    },
    technologies: ['html', 'bootstrap', 'Ruby on rails'],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it 1960s with the releaLorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it
              1960s with the releax map lapora verita.`,
    liveVersion: 'See live',
    source: 'See Source',
  },
];

const desktopTitle = document.querySelector('.dsk-popup-title');
const desktopP = document.querySelector('.dsk-txt');

details.forEach((detail) => {
  const popupTitle = document.createElement('H2');
  const titleTxt = document.createTextNode(`${detail.title}`);
  popupTitle.appendChild(titleTxt);
  desktopTitle.appendChild(popupTitle);

  document.querySelector('.dsk-popup-links').innerHTML = createLinks(
    detail.technologies,
  );

  const image = document.createElement('IMG');
  image.setAttribute('src', detail.featuredImage.src);
  image.setAttribute('alt', detail.featuredImage.src);
  document.querySelector('.dsk-popup-img').appendChild(image);

  const detailP = document.createElement('p');
  const pText = document.createTextNode(`${detail.description}`);
  detailP.appendChild(pText);
  desktopP.appendChild(detailP);

  document.querySelector(
    '.live',
  ).innerHTML = `<button type="submit" class="is-link"><span class="popup-btn">${detail.liveVersion}</span>    <i class="fa fa-check-circle-o" aria-hidden="true"></i>
</span></button>`;

  document.querySelector(
    '.source',
  ).innerHTML = `<button type="submit" class="is-link"><span  class="popup-btn">${detail.source}</span>    <span><i class="fa fa-github" aria-hidden="true"></span></button>`;
});
