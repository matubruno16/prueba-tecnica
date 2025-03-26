import express, { Router } from "express";
import { WeatherController } from "../controllers/weather.controller.js";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const weatherController = new WeatherController();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "weather.html"));
});

router.get("/weather", (req, res) =>
  weatherController.getWeatherCity(req, res)
);

export default router;
