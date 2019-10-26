// Api Key: 0e77f93fa96998c5a8997c761aaba15a

// https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=0e77f93fa96998c5a8997c761aaba15a

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?&appid=0e77f93fa96998c5a8997c761aaba15a';

function fetchJSONUrl(url) {
	return fetch(url).then(response => response.json());
}

const body = document.querySelector('body');
const inputButton = document.getElementById('inputCheckButton');
const cityInput = document.querySelector('input');
const para = document.createElement('p');
const resultsDiv = document.querySelector('.weatherDiv');
body.appendChild(para);
inputButton.addEventListener('click', () => {
	const citySearch = cityInput.value.toLowerCase();
	if (citySearch) {
        const cityUrl = `${baseUrl}&q=${citySearch}`;
        resultsDiv.innerHTML = '';
        para.textContent = '';
		fetchJSONUrl(cityUrl).then(data => {
			renderWeatherDetails(data);
		});
	} else {
		para.textContent = 'Please Enter City Name or Correct City Name';
	}
});

function renderWeatherDetails(weatherData) {
    console.log(weatherData);
    resultsDiv.innerHTML = '';

	const cityHeading = document.createElement('h2');
	cityHeading.innerHTML = `
    ${weatherData.name}
    <span>${Math.floor(weatherData.main.temp - 273)}&#8451</span>`;
	resultsDiv.appendChild(cityHeading);

	const imageIcon = document.createElement('div');
	imageIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">`;
	resultsDiv.appendChild(imageIcon);

	const cityDescription = document.createElement('h3');
	cityDescription.innerHTML = `${weatherData.weather[0].description}`;
	resultsDiv.appendChild(cityDescription);

	const main = document.createElement('main');
	resultsDiv.appendChild(main);
	const weatherUl1 = document.createElement('ul');
	main.appendChild(weatherUl1);
	const sunrise = new Date(weatherData.sys.sunrise * 1000)
		.toLocaleTimeString()
		.split(':')
		.slice(0, 2)
		.join(':');
	const sunset = new Date(weatherData.sys.sunset * 1000)
		.toLocaleTimeString()
		.split(':')
		.slice(0, 2)
		.join(':');
	weatherUl1.innerHTML = `
    <li>Wind: ${weatherData.wind.speed} kph</li>
    <li>Sunrise: ${sunrise}am</li>
    <li>Sunset: ${sunset}pm</li>
    `;
	const weatherUl2 = document.createElement('ul');
	main.appendChild(weatherUl2);
	weatherUl2.innerHTML = `
    <li>Humidity: ${weatherData.main.humidity} &#37</li>
    <li>Max Temperature: ${Math.floor(weatherData.main.temp_max - 273)}&#8451</li>
    <li>Min Temperature: ${Math.floor(weatherData.main.temp_min - 273)}&#8451</li>
    `;

    const mapDiv = document.createElement('div');
    mapDiv.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="500" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=${weatherData.name}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>`;
    resultsDiv.appendChild(mapDiv);

}
