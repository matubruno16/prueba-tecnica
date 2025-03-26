const weatherForm = document.querySelector("#weather-form");
const weatherCard = document.querySelector("#weather-card");
const forecastForm = document.querySelector("#forecast-form");
const forecastCard = document.querySelector("#forecast-card");

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  weatherCard.innerHTML = "";

  const city = document.querySelector("#city").value;
  const response = await fetch(`/weather?city=${city}`);

  if (response.ok) {
    const data = await response.json();

    weatherCard.innerHTML = `
    <div class="weather-card">
      <h2>${data.name}</h2>
      <p>Min Temp: ${data.tempMin} °C</p>
      <p>Max Temp: ${data.tempMax} °C</p>
      <p>Current Temp: ${data.temp} °C</p>
      <p>Humidity: ${data.humidity} %</p>
      <p>Pressure: ${data.pressure} hPa</p>
      <img src="${data.icon}" alt="Weather Icon">
    </div>
    `;
  } else {
    weatherCard.innerHTML = `<p>Could not fetch weather data for ${city}. Please try again.</p>`;
  }
});

forecastForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  forecastCard.innerHTML = "";

  const inputLat = document.querySelector("#lat").value;
  const inputLon = document.querySelector("#lon").value;
  const inputDays = document.querySelector("#days").value;
  const response = await fetch(
    `weather/forecast?lat=${inputLat}&lon=${inputLon}&days=${inputDays}`
  );

  if (response.ok) {
    const data = await response.json();

    forecastCard.innerHTML = data.map((forecast) => `
    <div class="weather-card">
      <img src="https://openweather.site/img/wn/${forecast.icon}.png" alt="Weather Icon">
      <p>Min Temp: ${(forecast.tempMin - 273.15).toFixed(1)} °C</p>
      <p>Max Temp: ${(forecast.tempMax - 273.15).toFixed(1)} °C</p>
      <p>Current Temp: ${(forecast.temp - 273.15).toFixed(1)} °C</p>
      <p>Humidity: ${forecast.humidity} %</p>
      <p>Pressure: ${forecast.pressure} hPa</p>
    </div>
  `).join("");
  } else {
    forecastCard.innerHTML = `<p>Could not fetch forecast data. Please try again.</p>`;
  }
});
