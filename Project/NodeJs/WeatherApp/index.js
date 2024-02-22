const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
  try {
    const { city } = req.query;
    const apiKey = 'baaaf54e762b585ec2025e99d9e62b7a';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(apiUrl);
    // const response=await fetch(apiUrl);
    const weatherData = response.data;
    // const weatherData=await response.json();
    console.log(weatherData);
    res.json(weatherData);
    // res.send(weatherData)
  } catch (error) {
    res.status(400).json({ error: 'Could not fetch weather data' });
  }
});

app.listen(port, () => {
  console.log(`Weather app listening at http://localhost:${port}`);
});
