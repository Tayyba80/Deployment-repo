import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherComponent() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: 'Tokyo',
            appid: '3e05c6158a96a45384bdce41888da1d0', 
            units: 'metric', 
          },
        });
        setWeather(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!weather) return <p>Loading...</p>;

  return (
    <div>
      <h1>Weather in {weather.name}</h1>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherComponent;
