require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weather');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/weather', weatherRoutes);

app.get('/', (req, res) => {
    res.send('Disaster Preparedness API Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

