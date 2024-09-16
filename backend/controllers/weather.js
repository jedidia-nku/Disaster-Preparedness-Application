const axios = require('axios');

exports.getWeather = async (req, res) => {
  const location = req.query.location;
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.OPENWEATHERMAP_API_KEY}`;
  
  try {
    const response = await axios.get(weatherUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
};

