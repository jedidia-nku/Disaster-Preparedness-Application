const axios = require('axios');

const getWeatherData = async (req, res) => {
  try {
    const { location } = req.query;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: location,
        appid: process.env.OPENWEATHER_API_KEY,
        units: 'metric',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};

module.exports = { getWeatherData };
