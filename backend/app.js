// backend/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/weather', require('./routes/weather'));

// Basic Home Route
app.get('/', (req, res) => {
  res.send('Disaster Preparedness API Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
