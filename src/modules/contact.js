import navbar from './navbar';
import footer from './footer';

const contact = () => {
	const main = document.createElement('main');

	const text = document.createElement('p');
	text.innerHTML = `
    You can contact us through our phone number: 111-222-333<br>
    or send us an email to fakedirection@nonexistent.com
  `;

	main.appendChild(navbar());
	main.appendChild(text);
	main.appendChild(footer());

	return main;
};

export default contact;
