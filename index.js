import express from "express";
import router from "./src/routes/weather.routes.js";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "src", "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "views", "weather.html"));
});

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server running on port 3000"));
