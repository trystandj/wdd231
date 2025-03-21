const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidityElement = document.querySelector('#humidity');
const highTempElement = document.querySelector('#high-temp');
const lowTempElement = document.querySelector('#low-temp');
const sunriseElement = document.querySelector('#sunrise');
const sunsetElement = document.querySelector('#sunset');

const todayElement = document.querySelector('#today');
const tomorrowElement = document.querySelector('#tomorrow');
const dayAfterElement = document.querySelector('#day-after');

const myKey = '7d9cf489b298ec3fa1b3ae5ed3eaa9ee';
const myLat = "44.75";
const myLong = "-73.64";

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
}

function displayResults(data) {
    currentTemp.textContent = `Current: ${Math.round(data.main.temp)}°F`;
    highTempElement.textContent = `High: ${Math.round(data.main.temp_max)}°F`;
    lowTempElement.textContent = `Low: ${Math.round(data.main.temp_min)}°F`;
    humidityElement.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;

    sunriseElement.textContent = `Sunrise: ${formatTime(data.sys.sunrise)}`;
    sunsetElement.textContent = `Sunset: ${formatTime(data.sys.sunset)}`;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.textContent = data.weather[0].description;
}

function displayForecast(forecastData) {
    const dailyForecasts = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));

    todayElement.textContent = `High: ${Math.round(dailyForecasts[0].main.temp_max)}°F`;
    tomorrowElement.textContent = `High: ${Math.round(dailyForecasts[1].main.temp_max)}°F`;
    dayAfterElement.textContent = `High: ${Math.round(dailyForecasts[2].main.temp_max)}°F`;
}

async function fetchWeatherData() {
    try {
        
        const currentResponse = await fetch(myUrl);
        if (!currentResponse.ok) {
            throw Error(await currentResponse.text());
        }
        const data = await currentResponse.json();
        displayResults(data);

        // Fetch forecast
        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
            throw Error(await forecastResponse.text());
        }
        const forecastData = await forecastResponse.json();
        console.log("Forecast data:", forecastData);
        displayForecast(forecastData);
    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
}


fetchWeatherData();
