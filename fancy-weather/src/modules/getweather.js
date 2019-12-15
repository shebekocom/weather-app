export default async function getWeather(loc) {
  const WHETHER_API_TOKEN = '641973d501e5df987672229f270389d8';
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `https://api.darksky.net/forecast/${WHETHER_API_TOKEN}/${loc}`;
  return fetch(proxyUrl + url).then(response => response.json());
}
