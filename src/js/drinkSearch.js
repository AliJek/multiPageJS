// DRINK SEARCH
const drinkInput = document.querySelector('#search');
const drinkBtn = document.querySelector('.search-engine__top-btn');
const drinkList = document.querySelector('.search-list');

const navMobile = document.querySelector('.nav__mobile');
const navDesktop = document.querySelector('.nav__desktop');
const navBtn = document.querySelector('.nav__btn');

// NAV TOGGLE
const navToggle = () => {
	navMobile.classList.toggle('active');
	navBtn.classList.toggle('active-btn');
};


const drinkSearch = () => {
	const name = drinkInput.value;
	const API_LINK = 'https://api.api-ninjas.com/v1/cocktail?name=';
	const API_DRINK_KEY = 'Br7YxGpFxwX7ZgXydZ2oIQ==J4TUqg9hUqmoBNJB';
	const URL = API_LINK + name;

    drinkList.textContent = ''

	fetch(URL, {
		headers: {
			'X-Api-Key': API_DRINK_KEY,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			data.forEach((el) => {
				const li = document.createElement('li');
				li.innerHTML = el.name;
				drinkList.appendChild(li);
			});
		})
};

drinkBtn.addEventListener('click', drinkSearch);
