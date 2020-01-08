export default function renderCoodinates(loc, latitude, longitude) {
  const lat = latitude;
  const lon = longitude;
  const locationCoordinates = loc.split(',');
  lat.textContent = `latitude: ${locationCoordinates[0]}`;
  lon.textContent = `longitude: ${locationCoordinates[1]}`;
}
