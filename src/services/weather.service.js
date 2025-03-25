import axios from "axios";
import dotenv from "dotenv";
import { Weather } from "../models/weather.model.js";

dotenv.config();

export class WeatherService {
  constructor() {
    this.countryCode = "EN";
    this.baseURL = process.env.API_WEATHER_BASE_URL;
    this.headers = {
      "x-rapidapi-key": process.env.API_WEATHER_KEY,
      "x-rapidapi-host": process.env.API_WEATHER_HOST,
    };
  }

  async getWeatherByCity(city, unit) {
    try {
      const response = await axios.get(
        `${this.baseURL}/city/${city}/${this.countryCode}`,
        {
          headers: this.headers,
        }
      );

      if (response.status !== 200 || response.statusText !== "OK") {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const temp = this.convertTemp(response.data.main.temp, unit);
      const tempMin = this.convertTemp(response.data.main.temp_min, unit);
      const tempMax = this.convertTemp(response.data.main.temp_max, unit);
      const icon = `https://openweather.site/img/wn/${response.data.weather[0].icon}.png`;

      const weather = new Weather(
        response.data.name,
        tempMin,
        tempMax,
        temp,
        response.data.main.humidity,
        response.data.main.pressure,
        icon
      );

      return weather;
    } catch (error) {
      console.error("❌ Error obtaining weather data:", error.message);
      throw error;
    }
  }
  convertTemp(temp, unit) {
    if (unit === "celsius") return ((temp - 32) * (5 / 9)).toFixed(2);
    else if (unit === "fahrenheit")
      return ((temp - 273.15) * (9 / 5) + 32).toFixed(2);
    return temp;
  }
}
