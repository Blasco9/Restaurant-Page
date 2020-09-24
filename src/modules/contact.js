const contact = () => {
  const main = document.createElement('main');
  main.id = 'contact'

	const text = document.createElement('p');
	text.innerHTML = `
    You can contact us through our phone number: 111-222-333<br>
    or send us an email to fakedirection@nonexistent.com
  `;
	
	main.appendChild(text);	

	return main;
};

export default contact;
