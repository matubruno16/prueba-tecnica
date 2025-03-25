import express from "express";
import { WeatherController } from "../controllers/weather.controller.js";

const router = express.Router();

const weatherController = new WeatherController();

router.get("/weather", (req, res) =>
  weatherController.getWeatherCity(req, res)
);

export default router;
