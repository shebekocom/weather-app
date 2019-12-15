import './css/style.css';
import './scss/style.scss';
import '@babel/polyfill';

const seatchButton = document.querySelector('.search--button');
const htmlDoc = document.querySelector('html');
const refrashButton = document.querySelector('.refrash--icon');
const serchCity = document.querySelector('.search--input');
const citylocation = document.querySelector('.location--city');
const weatherTemperature = document.querySelector('.weather--tempereture-number');

// background imgage api function

async function imgApi(city) {
  // const IMG_API_TOKEN = '9b5364f53d2ad5197f5540e6977a8f97637d12e8e7038aa676f6bcce3894294d';
  const IMG_API_TOKEN = '3352a6dc1dbc73fe6945c49da0928d22670e8f3f8bac7e4692760b14788b2477';
  const url = `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${IMG_API_TOKEN}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

function refrash() {
  refrashButton.classList.add('rotate_icon');
  imgApi();
}

// get geo api function

async function getUserLocation() {
  const LOCATION_API_TOKEN = '7cb6c170824055';
  const url = `https://ipinfo.io?token=${LOCATION_API_TOKEN}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

// get coordinates by city name api function

async function getCoordinatesCity(city) {
  const COORDINATES_API_TOKEN = '3468d757b0dd4fc19888429473458d0e';
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${COORDINATES_API_TOKEN}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

async function getWeather(loc) {
  const WHETHER_API_TOKEN = '641973d501e5df987672229f270389d8';
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `https://api.darksky.net/forecast/${WHETHER_API_TOKEN}/${loc}`;
  return fetch(proxyUrl + url).then(response => response.json());
}

// function view fancy-weather on page

function renderForecastInfo(data, results, currently, loc, city, country) {
  console.log(currently);
  console.log(city);
  console.log(loc);
  console.log(country);
  citylocation.textContent = `${city}, ${country}`;
  weatherTemperature.textContent = Math.round(currently.temperature);
  const randomImgItem = Math.floor(Math.random() * 10);
  htmlDoc.style.background = `url(${results[randomImgItem].urls.regular})`;
  htmlDoc.style.backgroundRepeat = 'no-repeat';
  htmlDoc.style.backgroundSize = 'cover';
  htmlDoc.style.backgroundPosition = 'center center';
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
