import navbar from './modules/navbar.js';
import footer from './modules/footer.js';
import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

const container = document.querySelector('#content');
container.appendChild(navbar());
container.appendChild(home());
container.appendChild(footer());

document.querySelector('.nav-link.home').addEventListener('click', () => {
  container.replaceChild(home(), document.querySelector('main'))
});

document.querySelector('.nav-link.menu').addEventListener('click', () => {
  container.replaceChild(menu(), document.querySelector('main'))
});

document.querySelector('.nav-link.contact').addEventListener('click', () => {
  container.replaceChild(contact(), document.querySelector('main'))
});
