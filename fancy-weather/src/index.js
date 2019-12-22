import './css/style.css';
import './scss/style.scss';
import '@babel/polyfill';
import './modules/renderhtml'; // render html
import getUserLocation from './modules/getUserLocation'; // get geo api function
import getImg from './modules/getImg'; // background imgage api function
import getCoordinatesCity from './modules/getCoordinatesCity'; // get coordinates by city name api function
import getWeather from './modules/getWeather'; // get weather api function
import renderImg from './modules/renderImg'; // change background img render
import renderMap from './modules/renderMap'; // import map module
import renderCoodinates from './modules/renderCoodinates'; // import map module
import renderPredictWeather from './modules/renderPredictWeather'; // import predict weather

const seatchButton = document.querySelector('.search--button');
const htmlDoc = document.querySelector('html');
const refrashButton = document.querySelector('.refrash--icon');
const serchCity = document.querySelector('.search--input');
const citylocation = document.querySelector('.location--city');
const weatherTemperature = document.querySelector('.weather--tempereture-number');
const precipTypeDoc = document.querySelector('.weather--rainfall-item:nth-child(1)');
const feellikeDoc = document.querySelector('.weather--rainfall-item:nth-child(2)');
const windSpeedDoc = document.querySelector('.weather--rainfall-item:nth-child(3)');
const humidityDoc = document.querySelector('.weather--rainfall-item:nth-child(4)');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');
const celsiusButton = document.querySelector('.celsius');
const dateLocationDoc = document.querySelector('.location--date');
const dayWeather = document.querySelectorAll('.weather_predict--item-day');
const predictDayWeather = document.querySelectorAll('.weather_predict--item-degree');

function refrash() {
  refrashButton.classList.add('rotate_icon');
  getImg();
}

const daysWeek = ['sunday', 'monday', 'tuesday ', 'wednesday ', 'thursday', 'friday', 'saturday'];

// function view fancy-weather on page

function renderForecastInfo(data, results, currently, offset, daily, loc, city, country) {
  renderImg(results, htmlDoc);
  const likeTemperatureСelsius = Math.round((Number(currently.apparentTemperature) - 32) / 1.8);
  const temperatureСelsius = Math.round((Number(currently.temperature) - 32) / 1.8);
  const dateLocation = new Date(currently.time * 1000 + offset * 3600 * 1000)
    .toISOString()
    .substr(0, 16)
    .split('T')
    .reverse()
    .join(', ');
  dateLocationDoc.textContent = dateLocation;
  precipTypeDoc.textContent = currently.precipType;
  feellikeDoc.textContent = `Feels like: ${likeTemperatureСelsius} °`;
  windSpeedDoc.textContent = `Wind: ${Math.round(currently.windSpeed)} m/s`;
  humidityDoc.textContent = `Humidity: ${currently.humidity * 100} %`;
  citylocation.textContent = `${city}, ${country}`;
  weatherTemperature.textContent = temperatureСelsius;
  renderPredictWeather(daily, offset, dayWeather, predictDayWeather, daysWeek);
  renderCoodinates(loc, latitude, longitude);
  renderMap(loc);
}

// start api functions

async function init() {
  try {
    if (serchCity.value) {
      const city = serchCity.value;
      const data = await getCoordinatesCity(city);
      const loc = `${data.results[0].geometry.lat}, ${data.results[0].geometry.lng}`;
      const { currently, offset, daily } = await getWeather(loc);
      console.log('await getWeather(loc): ', await getWeather(loc));
      const { results } = await getImg(city);
      const { country } = data.results[0].components;
      renderForecastInfo(data, results, currently, offset, daily, loc, city, country);
    } else {
      const { loc, city, country } = await getUserLocation();
      const { currently, offset, daily } = await getWeather(loc);
      const { results } = await getImg(city);
      const data = '';
      renderForecastInfo(data, results, currently, offset, daily, loc, city, country);
    }
  } catch (err) {
    console.log(err);
  }
}

init();

seatchButton.addEventListener('click', () => init());
refrashButton.addEventListener('click', () => refrash());
celsiusButton.addEventListener('click', () => {});
