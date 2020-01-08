export default async function getUserLocation() {
  const LOCATION_API_TOKEN = '7cb6c170824055';
  const url = `https://ipinfo.io?token=${LOCATION_API_TOKEN}`;
  return fetch(url).then(response => {
    return response.json();
  });
}
