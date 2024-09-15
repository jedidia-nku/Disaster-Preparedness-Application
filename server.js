const express = require('express');
const axios = require('axios');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'disaster_preparedness',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Fetch weather data from OpenWeatherMap API
app.get('/api/weather', async (req, res) => {
  const location = req.query.location;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHERMAP_API_KEY}`);
    const weatherData = {
      description: response.data.weather[0].description,
      temp: response.data.main.temp - 273.15, // Convert to Celsius
    };
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

// Fetch disaster alerts (simulated for now)
app.get('/api/disasters', (req, res) => {
  // Simulated disaster alerts
  const alerts = ['Flood Warning', 'Hurricane Alert'];
  res.json({ alerts });
});

// Fetch satellite imagery from NASA API
app.get('/api/nasa-image', async (req, res) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&dim=0.1&date=2024-01-01&api_key=${process.env.NASA_API_KEY}`);
    res.json({ image: response.data.url });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching satellite image' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

