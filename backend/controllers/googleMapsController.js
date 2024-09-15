const axios = require('axios');

const getEvacuationRoutes = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json`, {
      params: {
        origin,
        destination,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch evacuation routes' });
  }
};

module.exports = { getEvacuationRoutes };
