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

const articleOne = {
  sectionTitle: 'My Recent Works',
  sectionImage: {
    src: 'assets/ImgPlaceholder@2x.png',
    alt: 'section image',
  },
};
const sTitle = document.querySelector('.works-title');

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

// gridProjects
const articles = [
  {

    title: 'Multi-Post Stories',
    closeBtn: '&#x3A7',
    paragraph: `A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a standard
              dummy text.`,
    featuredImage: {
      src: 'assets/Snapshoot Portfolio.png',
      alt: 'featured image',
    },
    technologyArticle: ['css', 'html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
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

  {
    title: 'Profesional Art Printing Data',
    closeBtn: '&#x3A7',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    featuredImage: {
      src: 'assets/Snapshoot Portfolio.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
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
  {
    title: 'Profesional Art Printing Data',
    closeBtn: '&#x3A7',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    featuredImage: {
      src: 'assets/Snapshoot Portfolio.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
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
  {
    title: 'Profesional Art Printing Data',
    closeBtn: '&#x3A7',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    featuredImage: {
      src: 'assets/Snapshoot Portfolio.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
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
  {
    title: 'Profesional Art Printing Data',
    closeBtn: '&#x3A7',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    featuredImage: {
      src: 'assets/Snapshoot Portfolio.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
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
  {
    title: 'Profesional Art Printing Data',
    closeBtn: '&#x3A7',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    featuredImage: {
      src: 'assets/Snapshoot Portfolio.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
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
  {
    title: 'Profesional Art Printing Data',
    closeBtn: '&#x3A7',
    paragraph: `A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard`,
    featuredImage: {
      src: 'assets/Snapshoot Portfolio.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'bootstrap', 'Ruby'],
    prjBtn: 'See Project',
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
// popup only items

function image() {
  const img = document.createElement('img');
  return img;
}

function description(d) {
  const p = document.createElement('p');
  p.textContent = d;
  return p;
}

// popuponly items end
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

function createArticle(articleContent, index) {
  const article = document.createElement('article');
  article.classList.add('works');
  article.classList.add('bkg');
  article.setAttribute('data-index', index);

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
const grid = document.querySelector('.works-grid');

function createArticles(content) {
  content.forEach((article, index) => {
    const art = createArticle(article, index);
    grid.appendChild(art);
  });
}

createArticles(articles);

const a = document.querySelector('.item1-description');

a.appendChild(grid.firstChild);

// modal popup
const modal = document.querySelector('.dsk-width');
const modalBtns = document.querySelectorAll('.button-orange');

modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener('click', (event) => {
    const parentArticle = event.target.parentElement.parentElement;
    const articleIndex = parentArticle.dataset.index;
    const article = articles[articleIndex];

    const popUp = document.createElement('div');
    popUp.classList.add('popup');

    const closeButton = document.createElement('button');
    closeButton.innerHTML = `${(article.closeBtn)}`;
    closeButton.classList.add('close-btn');

    const h4tagModal = createH4();
    h4tagModal.innerHTML = `<h4 class="popup-title">${article.title}</h4>`;

    const links = createArticleLinks(article.technologyArticle);
    links.classList.remove('button-dark', 'link-item');
    links.classList.add('popup-links');

    const imageText = document.createElement('div');
    imageText.classList.add('image-text');

    const popUpimage = document.createElement('div');
    popUpimage.classList.add('popup-img');
    const imgC = image(article.featuredImage);
    imgC.src = article.featuredImage.src;
    imgC.alt = article.featuredImage.alt;
    popUpimage.appendChild(imgC);

    const buttonText = document.createElement('div');
    buttonText.classList.add('button-txt');
    const des = description(article.description);
    des.classList.add('popup-txt');

    const popupButtons = document.createElement('div');
    popupButtons.classList.add('popup-buttons');

    const popButtonLive = document.createElement('button');
    popButtonLive.innerHTML = `<button type="submit" class="is-link popup-btn"><span>${article.liveVersion}</span>    <i class="fa fa-check-circle-o" aria-hidden="true"></i></span></button>`;
    popButtonLive.classList.add('live');

    const popButtonSource = document.createElement('button');
    popButtonSource.innerHTML = `<button type="submit" class="is-link popup-btn"><span>${article.source}</span>    <span><i class="fa fa-github" aria-hidden="true"></span></button>`;
    popButtonSource.classList.add('source');
    popupButtons.appendChild(popButtonLive);
    popupButtons.appendChild(popButtonSource);

    buttonText.appendChild(des);
    buttonText.appendChild(popupButtons);

    imageText.appendChild(popUpimage);
    imageText.appendChild(buttonText);

    popUp.appendChild(closeButton);
    popUp.appendChild(h4tagModal);
    popUp.appendChild(links);
    popUp.appendChild(imageText);

    modal.appendChild(popUp);

    modal.classList.add('openModel');
    modal.style.display = 'block';

    closeButton.addEventListener('click', () => {
      modal.classList.remove('openModel');
      popUp.remove();
      modal.style.display = 'none';
    });
  });
});
