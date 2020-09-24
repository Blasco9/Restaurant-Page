import navbar from './navbar';
import footer from './footer';

const home = () => {
	const main = document.createElement('main');

	const title = document.createElement('h1');
	title.innerText = 'Restaurant Title';

	const text = document.createElement('p');
	text.innerText =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eligendi natus sunt voluptate saepe doloribus non soluta exercitationem architecto atque!';

	main.appendChild(navbar());
  main.appendChild(title);
  main.appendChild(text)
	main.appendChild(footer());

	return main;
};

export default home