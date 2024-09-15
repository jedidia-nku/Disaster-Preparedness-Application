const axios = require('axios');

const getSatelliteImagery = async (req, res) => {
  try {
    const { date } = req.query;
    const response = await axios.get('https://api.nasa.gov/planetary/earth/assets', {
      params: {
        lon: req.query.lon,
        lat: req.query.lat,
        date: date,
        dim: 0.1,
        api_key: process.env.NASA_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch satellite imagery' });
  }
};

module.exports = { getSatelliteImagery };
