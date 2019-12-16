export default function imgRender(results, htmlDoc) {
  const newHtml = htmlDoc;
  const randomImgItem = Math.floor(Math.random() * 10);
  newHtml.style.background = `url(${results[randomImgItem].urls.regular})`;
  newHtml.style.backgroundRepeat = 'no-repeat';
  newHtml.style.backgroundSize = 'cover';
  newHtml.style.backgroundPosition = 'center center';
}