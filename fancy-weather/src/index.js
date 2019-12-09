import './css/style.css';
import './scss/style.scss';
import '@babel/polyfill';


const seatchButton = document.querySelector('.search--button');

// background imgage api function

async function imgApi() {
  const searchText = document.querySelector('.search--input').value;
  const url = `https://api.unsplash.com/photos/random?query=${searchText}&client_id=9b5364f53d2ad5197f5540e6977a8f97637d12e8e7038aa676f6bcce3894294d`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector('html').style.background = `url(${data.urls.raw})`;
    document.querySelector('html').style.backgroundRepeat = 'no-repeat';
    document.querySelector('html').style.backgroundSize = 'cover';
    document.querySelector('html').style.backgroundPosition = 'center center';
  } catch (err) {
    console.log(err);
  }
}

seatchButton.addEventListener('click', () => imgApi());