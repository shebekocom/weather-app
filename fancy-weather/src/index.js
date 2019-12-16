import './css/style.css';
import './scss/style.scss';
import '@babel/polyfill';
import getUserLocation from './modules/getuserlocation'; // get geo api function
import getImg from './modules/getimg'; // background imgage api function
import getCoordinatesCity from './modules/getcoordinatescity'; // get coordinates by city name api function
import getWeather from './modules/getweather'; // get weather api function
import renderImg from './modules/renderimg'; // change background img render
import renderMap from './modules/rendermap'; // import map module
import renderCoodinates from './modules/rendercoodinates'; // import map module

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
  getImg();
}

// function view fancy-weather on page

function renderForecastInfo(data, results, currently, loc, city, country) {
  renderImg(results, htmlDoc);
  citylocation.textContent = `${city}, ${country}`;
  weatherTemperature.textContent = Math.round(currently.temperature);
  renderCoodinates(loc, latitude, longitude);
  renderMap(loc);
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
      const { results } = await getImg(city);
      const { country } = data.results[0].components;
      renderForecastInfo(data, results, currently, loc, city, country);
    } else {
      const { loc, city, country } = await getUserLocation();
      const { currently } = await getWeather(loc);
      const { results } = await getImg(city);
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
