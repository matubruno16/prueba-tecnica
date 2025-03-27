
const weatherForm = document.getElementById("weather-form");
const weatherCard = document.getElementById("weather-card");
const forecastForm = document.getElementById("forecast-form");
const forecastCard = document.getElementById("forecast-card");

function createWeatherCardHTML(data) {
  return `
    <div class="weather-card">
      <p>Min Temp: ${data.tempMin} °C</p>
      <p>Max Temp: ${data.tempMax} °C</p>
      <p>Current Temp: ${data.temp} °C</p>
      <p>Humidity: ${data.humidity} %</p>
      <p>Pressure: ${data.pressure} hPa</p>
      <img src="${data.icon}" alt="Weather Icon">
    </div>
  `;
}

function createForecastCardHTML(forecast) {
  return `
    <div class="weather-card">
      <img src="${forecast.icon}" alt="Weather Icon">
      <p>Min Temp: ${(forecast.tempMin - 273.15).toFixed(1)} °C</p>
      <p>Max Temp: ${(forecast.tempMax - 273.15).toFixed(1)} °C</p>
      <p>Current Temp: ${(forecast.temp - 273.15).toFixed(1)} °C</p>
      <p>Humidity: ${forecast.humidity} %</p>
      <p>Pressure: ${forecast.pressure} hPa</p>
    </div>
  `;
}

async function fetchWeatherData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
}

async function handleWeatherSubmit(event) {
  event.preventDefault();
  weatherCard.innerHTML = "";

  const city = document.getElementById("city").value;
  try {
    const data = await fetchWeatherData(`/weather?city=${city}`);
    weatherCard.innerHTML = createWeatherCardHTML(data);
  } catch (error) {
    weatherCard.innerHTML = `<p>Could not fetch weather data for ${city}. Please try again.</p>`;
  }
}

async function handleForecastSubmit(event) {
  event.preventDefault();
  forecastCard.innerHTML = "";

  const inputLat = document.getElementById("lat").value;
  const inputLon = document.getElementById("lon").value;
  const inputDays = document.getElementById("days").value;

  try {
    const data = await fetchWeatherData(
      `weather/forecast?lat=${inputLat}&lon=${inputLon}&days=${inputDays}`
    );
    forecastCard.innerHTML = data.map(createForecastCardHTML).join("");
  } catch (error) {
    forecastCard.innerHTML = `<p>Could not fetch forecast data. Please try again.</p>`;
  }
}

weatherForm.addEventListener("submit", handleWeatherSubmit);
forecastForm.addEventListener("submit", handleForecastSubmit);

