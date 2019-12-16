import './css/style.css';
import './scss/style.scss';
import '@babel/polyfill';
import getUserLocation from './modules/getuserlocation'; // get geo api function
import imgApi from './modules/imgapi'; // background imgage api function
import getCoordinatesCity from './modules/getcoordinatescity'; // get coordinates by city name api function
import getWeather from './modules/getweather'; // get weather api function
import imgRender from './modules/imgrender'; // change background img render
import getMap from './modules/getmap'; // import map module

const seatchButton = document.querySelector('.search--button');
const htmlDoc = document.querySelector('html');
const refrashButton = document.querySelector('.refrash--icon');
const serchCity = document.querySelector('.search--input');
const citylocation = document.querySelector('.location--city');
const weatherTemperature = document.querySelector('.weather--tempereture-number');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');
const celsiusButton = document.querySelector('.celsius');

function refrash() {
  refrashButton.classList.add('rotate_icon');
  imgApi();
}

// function view fancy-weather on page

function renderForecastInfo(data, results, currently, loc, city, country) {
  citylocation.textContent = `${city}, ${country}`;
  weatherTemperature.textContent = Math.round(currently.temperature);
  const locationCoordinates = loc.split(',');
  latitude.textContent = `latitude: ${locationCoordinates[0]}`;
  longitude.textContent = `longitude: ${locationCoordinates[1]}`;
  imgRender(results, htmlDoc);
  getMap(locationCoordinates[1], locationCoordinates[0]);
}
// start api functions

async function init() {
  try {
    if (serchCity.value) {
      const city = serchCity.value;
      const data = await getCoordinatesCity(city);
      console.log('data: ', data);
      const loc = `${data.results[0].geometry.lat}, ${data.results[0].geometry.lng}`;
      const { currently } = await getWeather(loc);
      const { results } = await imgApi(city);
      const { country } = data.results[0].components;
      renderForecastInfo(data, results, currently, loc, city, country);
    } else {
      const { loc, city, country } = await getUserLocation();
      const { currently } = await getWeather(loc);
      const { results } = await imgApi(city);
      const data = '';
      renderForecastInfo(data, results, currently, loc, city, country);
    }
  } catch (err) {
    console.log(err);
  }
}

init();

seatchButton.addEventListener('click', () => init());
refrashButton.addEventListener('click', () => refrash());
celsiusButton.addEventListener('click', () => {
  weatherTemperature.textContent = Math.round((Number(weatherTemperature.outerText) - 32) / 1.8);
});
