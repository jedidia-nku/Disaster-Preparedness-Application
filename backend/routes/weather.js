const express = require('express');
const axios = require('axios');
const router = express.Router();

const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

// Get weather for a specific location
router.get('/:location', async (req, res) => {
    const location = req.params.location;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

module.exports = router;

