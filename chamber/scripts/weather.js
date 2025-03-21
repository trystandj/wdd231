const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidityElement = document.querySelector('#humidity');
const highTempElement = document.querySelector('#high-temp');
const lowTempElement = document.querySelector('#low-temp');
const sunriseElement = document.querySelector('#sunrise');
const sunsetElement = document.querySelector('#sunset');

const myKey = '7d9cf489b298ec3fa1b3ae5ed3eaa9ee';
const myLat = "44.75";
const myLong = "-73.64";

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000); // Convert from UNIX time
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}

function displayResults(data) {
    currentTemp.textContent = `Current: ${data.main.temp}°F`;
    highTempElement.textContent = `High: ${data.main.temp_max}°F`;
    lowTempElement.textContent = `Low: ${data.main.temp_min}°F`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    
    sunriseElement.textContent = `Sunrise: ${formatTime(data.sys.sunrise)}`;
    sunsetElement.textContent = `Sunset: ${formatTime(data.sys.sunset)}`;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.textContent = data.weather[0].description;
}

async function apiFetch() {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
