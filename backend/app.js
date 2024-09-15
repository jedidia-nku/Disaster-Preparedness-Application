const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');
const nasaRoutes = require('./routes/nasaRoutes');
const googleMapsRoutes = require('./routes/googleMapsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoutes);
app.use('/api/satellite', nasaRoutes);
app.use('/api/routes', googleMapsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
