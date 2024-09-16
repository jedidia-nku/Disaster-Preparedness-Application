const axios = require('axios');

exports.getNasaImage = async (req, res) => {
  const date = req.query.date || new Date().toISOString().split('T')[0];
  const nasaUrl = `https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=${date}&dim=0.10&api_key=${process.env.NASA_API_KEY}`;

  try {
    const response = await axios.get(nasaUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching NASA data' });
  }
};

