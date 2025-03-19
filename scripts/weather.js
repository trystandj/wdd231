const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/4add8e7fb68c50caa26a9f9f34dcd807';

const myKey = '7d9cf489b298ec3fa1b3ae5ed3eaa9ee';
const myLat = "49.75";
const myLong = "6.64";

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

function displayResults(data) {
    currentTemp.textContent = `${data.main.temp}°C`; // Display temperature

    const iconCode = data.weather[0].icon; // Get the weather icon code
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
        console.log(data); // testing only
        displayResults(data);// displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();