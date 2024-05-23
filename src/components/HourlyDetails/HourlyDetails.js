import React from "react";
import {
  convertTo12HourFormat,
  getWeekday,
} from "../../Utils/Utils";
import "./HourlyDetails.css";

const HourlyDetails = (props) => {
  const { data } = props;

  const headers = [
    getWeekday(props?.data?.[0]?.time),
    "Weather",
    "Temperature",
    "Wind",
    "Precipitation",
    "Humidity",
    "Cloud",
    "Pressure",
  ];

  return (
    <div>
      <p className="header_text"> Hourly Details</p>
      <table className="custom_table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{convertTo12HourFormat(item.time)}</td>
              <td>
                <img src={item.condition?.icon} alt={item.condition?.text} />
              </td>
              <td>{item.temp_c}°C</td>
              <td>{item.wind_kph} kmph</td>
              <td>{item.precip_mm} mm</td>
              <td>{item.humidity}%</td>
              <td>{item.cloud}%</td>
              <td>{item.pressure_mb} mb</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HourlyDetails;
