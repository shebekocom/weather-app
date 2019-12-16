/* eslint-disable prefer-const */
/* eslint-disable no-undef */
export default function renderMap(loc) {
  const locationCoordinates = loc.split(',');
  const lat = locationCoordinates[1];
  const lng = locationCoordinates[0];
  mapboxgl.accessToken = 'pk.eyJ1IjoibnNoZWJla28iLCJhIjoiY2s0N3BkM2ozMHV1dDNscXUweGFod2kwZCJ9.SQd8POSM1I9PNQYxry0mDg';

  // eslint-disable-next-line no-unused-vars
  let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [lat, lng], // starting position [lng, lat]
    zoom: 8, // starting zoom
  });
}
