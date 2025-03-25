import { WeatherService } from "../services/weather.service.js";

class WeatherController {
  constructor() {
    this.weatherService = new WeatherService();
  }

  async getWeatherCity(req, res) {
    const { city, unit } = req.query;
    if (!city) {
      return res.status(400).json({ message: "City not found" });
    }
    let tempUnit = unit;
    if (!unit) {
      tempUnit = "celsius";
    }

    try {
      const data = await this.weatherService.getWeatherByCity(city, tempUnit);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { WeatherController };
