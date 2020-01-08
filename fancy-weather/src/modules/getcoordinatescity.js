export default async function getCoordinatesCity(city) {
  const COORDINATES_API_TOKEN = '3468d757b0dd4fc19888429473458d0e';
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${COORDINATES_API_TOKEN}`;
  return fetch(url).then(response => {
    return response.json();
  });
}
