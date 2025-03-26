const weatherForm = document.querySelector("#weather-form");
const weatherCard = document.querySelector("#weather-card");

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault(); 
  
  weatherCard.innerHTML = "";

  const city = document.querySelector("#city").value;
  const response = await fetch(`/weather?city=${city}`);
  
  if (response.ok) {
    const data = await response.json();
    
      weatherCard.innerHTML = `
      <h2>${data.name}</h2>
      <p>Min Temp: ${data.tempMin} °C</p>
      <p>Max Temp: ${data.tempMax} °C</p>
      <p>Current Temp: ${data.temp} °C</p>
      <p>Humidity: ${data.humidity} %</p>
      <p>Pressure: ${data.pressure} hPa</p>
      <img src="${data.icon}" alt="Weather Icon">
    `;
  } else {
    weatherCard.innerHTML = `<p>Could not fetch weather data for ${city}. Please try again.</p>`;
  }
});
