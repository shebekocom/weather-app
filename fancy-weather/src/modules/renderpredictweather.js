export default function renderPredictWeather(daily, offset, dayWeather, predictDayWeather, daysWeek) {
  const dayWeatherDoc = dayWeather;
  const predictDayWeatherDoc = predictDayWeather;
  let daysPredict = [];
  daily.data.forEach(el => {
    daysPredict.push([
      new Date(el.time * 1000 + offset * 3600 * 1000).getUTCDay(),
      Math.round(((el.temperatureMax - el.temperatureMin) / 2 + el.temperatureMin - 32) / 1.8),
    ]);
  });
  daysPredict = daysPredict.slice(1, 4);
  daysPredict.forEach((el, i) => {
    dayWeatherDoc[i].textContent = daysWeek[el[0]];
    predictDayWeatherDoc[i].textContent = `${el[1]}°`;
  });
}
