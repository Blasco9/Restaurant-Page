import navbar from './modules/navbar.js';
import footer from './modules/footer.js';
import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';
import './styles.css'

const container = document.querySelector('#content');
container.appendChild(navbar());
container.appendChild(home());
container.appendChild(footer());

const changePage = (event) => {
	const activeLink = document.querySelector('.active');
	const clickedLink = event.target;
	const page = clickedLink.classList[1];
	const contentToReplace = document.querySelector('main');
	let contentToShow = '';

	if (clickedLink !== activeLink) {
		activeLink.classList.remove('active');
		clickedLink.classList.add('active');

		contentToShow = page === 'home' ? home() : page === 'menu' ? menu() : contact();

		container.replaceChild(contentToShow, contentToReplace);
	}
};

document.querySelectorAll('.nav-link').forEach((link) => {
	link.addEventListener('click', changePage);
});
