import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..')));

import { getCoordinates, getWeather } from "./weatherAPI.js";

// const folderPath = './Immagini sito';
const folderPath = path.join(__dirname, '../src/assets/Immagini sito');

app.get('/get-filenames', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading folder' });
    }
    console.log({ files });
    res.json({ files });
  });
});


app.get('/weather-request', async (req, res) => {
  let city = "Riva del Garda";

  let coords = await getCoordinates(city);
  if (!coords) return res.status(404).json({ error: 'City not found.' });

  const weather = await getWeather(coords.lat, coords.lon);
  if (!weather) return res.status(500).json({ error: 'Weather data unavailable.' });

  res.json({
    city,
    coordinates: coords,
    weather: weather.instant,
    forecast: weather.next_1_hours
  });
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});