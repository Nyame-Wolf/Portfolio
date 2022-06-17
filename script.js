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

/* grid first article */
function createLinks(array) {
  let list = '';
  array.forEach((item) => {
    list += `<li> <a  class="is-link" href="#">${item}</a></li>`;
  });
  return list;
}
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
    closeBtn: '&times;',
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
    closeBtn: '&times;',
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
    closeBtn: '&times;',
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
    closeBtn: '&times;',
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
    closeBtn: '&times;',
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
    closeBtn: '&times;',
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

function image(imageD) {
  const img = document.createElement('img');
  img.classList.add('popup-img');
  img.textContent = imageD;
  return img;
}

function description(d) {
  const p = document.createElement('p');
  // p.classList.add('dsk-popup-img');
  p.textContent = d;
  return p;
}
function closeB(b) {
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn');
  return closeBtn;
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

  // popup things
  const parentDiv = document.querySelector('.dsk-width');

  const popUp = document.createElement('div');
  popUp.classList.add('popup');

  const closeButton = closeB();
  closeButton.innerHTML = `<div class="close-btn"><i class="fa fa-times" aria-hidden="true"></i></div>`

  const h4tagModal = createH4(articleContent.title);
  h4tagModal.classList.add("popup-title");

  const imageText = document.createElement('div');
  imageText.classList.add('image-text');

  const popUpimage = document.createElement('div');
  popUpimage.classList.add('popup-img');
  const imgC = image(articleContent.featuredImage);
  imgC.src = articleContent.featuredImage.src;
  imgC.alt = articleContent.featuredImage.alt;
  popUpimage.appendChild(imgC);

  const buttonText = document.createElement('div');
  buttonText.classList.add('button-txt');
  const des = description(articleContent.description);
  des.classList.add('popup-txt');

  const popupButtons = document.createElement('div');
  popUpimage.classList.add('popup-buttons');

  const popButtonLive = document.createElement('button');
  popButtonLive.innerHTML = `<button type="submit" class="is-link"><span class="popup-btn">${articleContent.liveVersion}</span>    <i class="fa fa-check-circle-o" aria-hidden="true"></i></span></button>`;
  popButtonLive.classList.add('live');

  const popButtonSource = document.createElement('button');
  popButtonSource.innerHTML = `<button type="submit" class="is-link"><span  class="popup-btn">${articleContent.source}</span>    <span><i class="fa fa-github" aria-hidden="true"></span></button>`;
  popButtonSource.classList.add('source');
  popupButtons.appendChild(popButtonLive);
  popupButtons.appendChild(popButtonSource);

  buttonText.appendChild(des);
  buttonText.appendChild(popupButtons);

  imageText.appendChild(popUpimage);
  imageText.appendChild(buttonText);
  imageText.appendChild(popUpimage);

  popUp.appendChild(h4tagModal);
  popUp.appendChild(imageText);
  popUp.appendChild(closeButton);
  parentDiv.appendChild(popUp);
  // popup things end

  article.appendChild(worksDescription);

  return article;
}

function createArticles(content) {
  const grid = document.querySelector('.works-grid');
  const modal = document.querySelector('dsk-width');

  content.forEach((article, index) => {
    const modalBtns = document.querySelectorAll('.button-orange');
    const closeBtn = document.getElementsByClassName('close-btn')[0];
    const art = createArticle(article, index);
    grid.appendChild(art);

    // modalBtns.forEach((modalBtn) => {
    //   modalBtn.addEventListener('click', (event) => {
    //     console.log({ event });
    //     console.log(event.target.parentElement.parentElement.dataset);
    //     if (index === event.target.parentElement.parentElement.dataset.index) {
    //       modal.style.display.index = 'block';
    //     }
    //   });
    // });
    // closeBtn.addEventListener('click', () => {
    //   modal.style.display = 'none';
    // });
  });
}

createArticles(articles);
console.log(articles)


// function createPopup(content) {
//   content.forEach((article, index) =>{
//     const popDiv =
//   })
//   return ;
// }

// modal popup
const modal = document.querySelector('.dsk-width');
const modalBtns = document.querySelectorAll('.button-orange');
const closeBtns = document.querySelectorAll('close-btn');
const getArticle = document.querySelectorAll("works-grid")

modalBtns.forEach((modalBtn) => {
  modalBtn.addEventListener('click', (event) => {
    const modal = document.querySelector('.dsk-width');
    console.log({ event });
    console.log(event.target.id);
    function get1Item() {
      for (let i = 0; i < getArticle.length; i += 1) {
        if (i === event.target.parentElement.parentElement.dataset.index) {
          modal.style.display = 'block';
        }

      }
    }

    // console.log(event.target.parentElement.parentElement.dataset.index);
  });
});
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
