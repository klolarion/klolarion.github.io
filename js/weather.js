

const API_KEY = '8c4cc3ae383f6891e2b9286e9ee69cbb';

function geoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}ºC`;
    })
}

function geoErr() {
    alert('Can\'t find you');
}

navigator.geolocation.getCurrentPosition(geoOk, geoErr);