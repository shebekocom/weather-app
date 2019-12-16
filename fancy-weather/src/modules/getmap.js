/* eslint-disable prefer-const */
/* eslint-disable no-undef */
export default function getMap(lat, lng) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibnNoZWJla28iLCJhIjoiY2s0N3BkM2ozMHV1dDNscXUweGFod2kwZCJ9.SQd8POSM1I9PNQYxry0mDg';

  // eslint-disable-next-line no-unused-vars
  let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [lat, lng], // starting position [lng, lat]
    zoom: 8, // starting zoom
  });
  console.log('пришли :', lng, lat);
}
