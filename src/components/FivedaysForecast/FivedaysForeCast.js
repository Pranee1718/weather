import React from 'react';
import { convertTemperature, getUnitSymbol } from '../../Utils/Utils';
import './FivedaysForeCast.css';

const FivedaysForecast = ({ forecastData, units }) => {
  return (
    <div className="five-day-forecast">
      <h3>Five-Day Weather Forecast</h3>
      <div className="forecast-grid">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
            <p>{convertTemperature(day.main.temp, 'metric', units).toFixed(1)}{getUnitSymbol(units)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FivedaysForecast;
