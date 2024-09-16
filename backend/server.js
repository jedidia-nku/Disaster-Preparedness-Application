const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/api/weather/:location', async (req, res) => {
    const location = req.params.location;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
        const weatherResponse = await axios.get(url);
        res.json(weatherResponse.data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

