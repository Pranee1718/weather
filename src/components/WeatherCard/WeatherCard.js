import React from 'react';
import { convertTemperature, getUnitSymbol } from '../../Utils/Utils';
import './WeatherCard.css';

const WeatherCard = ({ weatherData, units }) => {
  const { main, weather, wind } = weatherData;

  return (
    <div className="weather-card">
      <h2>Current Weather</h2>
      <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather[0].description} />
      <p>{weather[0].main}</p>
      <p>{weather[0].description}</p>
      <p>Temperature: {convertTemperature(main.temp, 'metric', units).toFixed(1)}{getUnitSymbol(units)}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
