const navMobile = document.querySelector('.nav__mobile');
const navDesktop = document.querySelector('.nav__desktop');
const navBtn = document.querySelector('.nav__btn');

// WEATHER APP
const cityInput = document.querySelector('#city');
const inputBtn = document.querySelector('.weatherapp__top-btn');
const cityName = document.querySelector('.weatherapp__city');
const error = document.querySelector('.error');
const temperature = document.querySelector('.temperature');
const weather = document.querySelector('.weather');
const weatherImg = document.querySelector('.weather-img');

// NAV TOGGLE
const navToggle = () => {
	navMobile.classList.toggle('active');
	navBtn.classList.toggle('active-btn');
};

// WEATHER APP
const weatherApp = () => {
	const city = cityInput.value;
	const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
	const API_KEY = '&appid=ae927aefec092a1c43364c8dad064e92';
	const API_UNITS = '&units=metric';
	const URL = API_LINK + city + API_KEY + API_UNITS;

	error.textContent = '';
	cityInput.value = '';

	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			const temp = data.main.temp;
			const weath = data.weather[0].main;
			const name = data.name;
			const icon = data.weather[0].icon;
			cityName.textContent = name;
			temperature.textContent = Math.floor(temp) + ' ℃';
			weather.textContent = weath;
			weatherImg.style.backgroundImage = `url(http://openweathermap.org/img/wn/${icon}@2x.png)`;
		})
		.catch(() => (error.textContent = 'Incorrect city name!'));
};


navBtn.addEventListener('click', navToggle);
inputBtn.addEventListener('click', weatherApp);

