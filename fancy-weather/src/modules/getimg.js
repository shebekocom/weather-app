export default async function getImg(city) {
  // const IMG_API_TOKEN = '9b5364f53d2ad5197f5540e6977a8f97637d12e8e7038aa676f6bcce3894294d';
  const IMG_API_TOKEN = '3352a6dc1dbc73fe6945c49da0928d22670e8f3f8bac7e4692760b14788b2477';
  const url = `https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${IMG_API_TOKEN}`;
  return fetch(url).then(response => {
    return response.json();
  });
}
