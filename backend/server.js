const express = require('express');
const dotenv = require('dotenv');
const weatherController = require('./controllers/weather');
const nasaController = require('./controllers/nasa');
dotenv.config();

const app = express();
const port = 5000;

// Weather route
app.get('/api/weather', weatherController.getWeather);

// NASA route
app.get('/api/nasa', nasaController.getNasaImage);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

