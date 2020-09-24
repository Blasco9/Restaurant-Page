import dishImg from '../images/menu-img.png';

const menu = () => {
	const main = document.createElement('main');

	const text = document.createElement('h1');
	text.innerText = "Take a look at the best menu you'll ever find!";

	const menu = document.createElement('section');

	for (let i = 0; i < 12; i++) {
    const dish = document.createElement('div');
    
		const img = document.createElement('img');
    img.src = dishImg;
    
		const name = document.createElement('h3');
    name.innerText = `Dish #${i + 1}`;
    
		const description = document.createElement('p');
		description.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eligendi natus';

		dish.appendChild(img);
		dish.appendChild(name);
		dish.appendChild(description);

		menu.appendChild(dish);
	}

	main.appendChild(text);
	main.appendChild(menu);

	return main;
};

export default menu;
