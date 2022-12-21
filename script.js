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
const articleOne = {
  sectionTitle: 'My Recent Works',
  sectionImage: {
    src: 'assets/Screenshot 2022-12-20 at 01.10.46.png',
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
    title: 'Crypto Prism',
    closeBtn: '&#x3A7',
    paragraph: `This metric app uses the coinlore api to display a list of crypto 
    currencies with their current price. It has a detail page that shows details 
    such as crypto symbol and its percentage daily change. `,
    featuredImage: {
      src: 'assets/Screenshot 2022-12-20 at 01.10.46.png',
      alt: 'featured image',
    },
    technologyArticle: ['Css', 'Html', 'React', 'Redux'],
    prjBtn: 'See Project',
    description: `This metric app uses the coinlore api to display a list of crypto 
    currencies with their current price. It has a detail page that shows details 
    such as crypto symbol and its percentage daily change.`,
    liveVersion:
      '<a href="https://crypto-prism.netlify.app/" target="_blank" rel="noreferrer">See live</a>',
    source:
      '<a href="https://github.com/Nyame-Wolf/crypto-prism" target="_blank" rel="noreferrer">See Source</a>',
  },

  {
    title: 'MovieFlix',
    closeBtn: '&#x3A7',
    paragraph: `This is a web application that consumes the tvmaze API. 
    It shows a list of 240 popular, TV shows . It allows users to add a 
    comment about the movie as well as click on the like button if they 
    enjoyed it`,
    featuredImage: {
      src: 'assets/movieflix.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'css', 'Javascript'],
    prjBtn: 'See Project',
    description: `This is a web application that consumes the tvmaze API. 
    It shows a list of 240 popular, TV shows . It allows users to add a 
    comment about the movie as well as click on the like button if they 
    enjoyed it`,
    liveVersion:
      '<a href="https://nyame-wolf.github.io/movie-app/dist/" target="_blank" rel="noreferrer">See live</a>',
    source:
      '<a href="https://github.com/Nyame-Wolf/movie-app" target="_blank" rel="noreferrer">See Source</a>',
  },
  {
    title: 'Budget App',
    closeBtn: '&#x3A7',
    paragraph: `This app lets you manage your spending. You can add a 
    category of items you want to spend and the app aggregates your net 
    spend`,
    featuredImage: {
      src: 'assets/budget.jpg',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'Ruby on Rails', 'Ruby'],
    prjBtn: 'See Project',
    description: `This app lets you manage your spending. You can add a 
    category of items you want to spend and the app aggregates your net 
    spend`,
    liveVersion:
      '<a href="https://budgetup.onrender.com/" target="_blank" rel="noreferrer">See live</a>',
    source:
      '<a href="https://github.com/Nyame-Wolf/budget-app" target="_blank" rel="noreferrer">See Source</a>',
  },
  {
    title: 'Todo List',
    closeBtn: '&#x3A7',
    paragraph: `This is a todo list created using webpack and vanilla javascript. 
    It lets a user add and remove to do items. It contains testing suite 
    using jest framework`,
    featuredImage: {
      src: 'assets/todoedit.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'Javascript', 'Css'],
    prjBtn: 'See Project',
    description: `This is a todo list created using webpack and vanilla javascript. 
    It lets a user add and remove to do items. It contains testing suite 
    using jest framework`,
    liveVersion:
      '<a href="https://nyame-wolf.github.io/To-Do-list/" target="_blank" rel="noreferrer">See live</a>',
    source:
      '<a href="https://github.com/Nyame-Wolf/To-Do-list" target="_blank" rel="noreferrer">See Source</a>',
  },
  {
    title: 'Space Missions',
    closeBtn: '&#x3A7',
    paragraph: `This project is a web application that consumes the SpaceX API. It 
    provides commercial and scientific space travel services that allows users to 
    book rockets and join selected space missions`,
    featuredImage: {
      src: 'assets/rockets.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'React', 'css'],
    prjBtn: 'See Project',
    description: `This project is a web application that consumes the SpaceX API. It 
    provides commercial and scientific space travel services that allows users to 
    book rockets and join selected space missions.`,
    liveVersion:
      '<a href=" https://space-traverlers-raminka-nyame.netlify.app/" target="_blank" rel="noreferrer">See live</a>',
    source:
      '<a href=" https://github.com/Nyame-Wolf/space-missions" target="_blank" rel="noreferrer">See Source</a>',
  },
  {
    title: 'Exploration Getaways',
    closeBtn: '&#x3A7',
    paragraph: `Exploration Getaways is a travelling application where 
    the user can register new accounts, login and book a set of different 
    trip packages. It is built and connected by using two different repos, 
    including back-end(Rails) and front-end(React/Redux)`,
    featuredImage: {
      src: 'assets/explore.jpg',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'React', 'css', 'Ruby on Rails'],
    prjBtn: 'See Project',
    description: `Exploration Getaways is a travelling application where 
    the user can register new accounts, login and book a set of different 
    trip packages. It is built and connected by using two different repos, 
    including back-end(Rails) and front-end(React/Redux)`,
    liveVersion:
      '<a href=" https://exploration-getaways.netlify.app/" target="_blank" rel="noreferrer">See live</a>',
    source:
      '<a href=" https://github.com/Nyame-Wolf/Exploration-Getaways-FRONTEND" target="_blank" rel="noreferrer">See Source</a>',
  },
  {
    title: 'Holistic Med Annual Conference',
    closeBtn: '&#x3A7',
    paragraph: `This is inspired by 2015 by Cindy Shin ccGlobal Korea. 
    It is a website for an imaginary annual holistic medicine conference. 
    It is made using plain vanilla javascript, HTML and css.`,
    featuredImage: {
      src: 'assets/holistic-med.png',
      alt: 'featured image',
    },
    technologyArticle: ['html', 'css', 'Javascript'],
    prjBtn: 'See Project',
    description: `This is inspired by 2015 by Cindy Shin ccGlobal Korea. 
    It is a website for an imaginary annual holistic medicine conference. 
    It is made using plain vanilla javascript, HTML and css.`,
    liveVersion:
      '<a href=" https://nyame-wolf.github.io/Holistic-Med-Annual-Meetup/" target="_blank" rel="noreferrer">See live</a>',
    source:
      '<a href=" https://github.com/Nyame-Wolf/Holistic-Med-Annual-Meetup" target="_blank" rel="noreferrer">See Source</a>',
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
  button.classList.add('button-orange', 'is-link', 'grid-buttons');
  button.textContent = cbutton;
  return button;
}

function createArticle(articleContent, index) {
  const article = document.createElement('article');
  article.classList.add('works');
  article.classList.add('bkg');
  article.setAttribute('data-index', index);

  const worksDescription = document.createElement('div');
  worksDescription.classList.add('works-description', 'add-padding');

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

// article 1 styles:

const a = document.querySelector('.item1-description');
const rmBkg = document.querySelectorAll('.works')[0];
rmBkg.classList.toggle('bkg');
rmBkg.classList.add('cchange');
const article1Ul = rmBkg.querySelector('ul');
article1Ul.classList.add('button-light');
const article1Btn = rmBkg.querySelector('button');
article1Btn.classList.toggle('grid-buttons');
article1Btn.classList.add('button-orange-sm');
const article1div = rmBkg.querySelector('div');
article1div.classList.toggle('add-padding');

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
    closeButton.innerHTML = `${article.closeBtn}`;
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

// end contact form validation
