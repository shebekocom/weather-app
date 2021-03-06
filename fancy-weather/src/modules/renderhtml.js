const bodyDoc = document.querySelector('body');
bodyDoc.innerHTML = `<div class="container">
        <header class="header">
            <nav class="nav">
                <div class="options">
                    <button class="refrash">
                        <img src="assets/img/refreshicon.svg" class="refrash--icon" data-src="assets/img/refreshicon.svg">
                    </button>
                    <select class="lang">
                        <option value="en">En</option>
                        <option value="ru">Ru</option>
                        <option value="ru">Be</option>
                    </select>
                    <button class="fahrenheit">°F</button>
                    <button class="celsius">°С</button>
                </div>
                <div class="search">
                    <input type="text" class="search--input" placeholder="Search city or ZIP">
                    <div class="search--mic"><img src="assets/img/mic.svg" data-src="assets/img/mic.svg"></div>
                    <button class="search--button">Search</button>
                </div>
            </nav>
        </header>
        <main class="main">
            <div class="wrapper">
                <div class="location">
                    <p class="location--city">Minsk, Belarus</p>
                    <p class="location--date">Tue 24 Desember 19:19</p>
                </div>
                <div class="weather">
                    <div class="weather--tempereture">
                        <span class="weather--tempereture-number">10</span><span
                            class="weather--tempereture-degree">°</span>
                    </div>

                    <div class="weather--icon"></div>
                    <div class="weather--rainfall">
                        <p class="weather--rainfall-item">overcast</p>
                        <p class="weather--rainfall-item">Feels like: 7°</p>
                        <p class="weather--rainfall-item">Wind: 2 m/s</p>
                        <p class="weather--rainfall-item">Humidity: 83%</p>
                    </div>
                </div>
                <div class="weather_predict">
                    <div class="weather_predict--item sun">
                        <p class="weather_predict--item-day">Tuesday</p>
                        <p class="weather_predict--item-degree">7°</p>
                    </div>
                    <div class="weather_predict--item cloud">
                        <p class="weather_predict--item-day">Wednesday</p>
                        <p class="weather_predict--item-degree">6°</p>
                    </div>
                    <div class="weather_predict--item cloud">
                        <p class="weather_predict--item-day">Thursday</p>
                        <p class="weather_predict--item-degree">3°</p>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                    <div class="map" id="map"></div>
                    <div class="coordinates">
                            <p class="latitude">Latitude: 53°54'</p>
                            <p class="longitude">Longitude: 27°34'</p>
                        </div>                
            </div>
        </main>
    </div>`;
