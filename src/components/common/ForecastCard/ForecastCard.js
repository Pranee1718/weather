import React, { useEffect, useState } from "react";
import "./ForecastCard.css";
import { Box } from "@mui/material";
import { getWeekday, extractDate } from "../../../Utils/Utils";

const ForecastCard = (props) => {
  const [location, setLocation] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (props?.data) {
      setLocation(props?.data?.location);
      setForecast(props?.data?.forecast?.forecastday);
      setCurrentWeather(props?.data?.current);
    }
  }, [props]);

  const forecastDayDataHandler = (data) => {
    props?.setForecastForDay?.(data);
  };
  const renderFourteenDaysForecast = () => {
    return (
      <Box>
        <h1 className="header_text">14-day forecast</h1>
        <Box className="inner_card_container forecast_card_scrollabe">
          {forecast?.map((weather, index) => (
            <Box
              key={index}
              sx={{ cursor: "pointer", mr: "24px" }}
              onClick={() => forecastDayDataHandler(weather)}
            >
              <Box sx={{ width: "120px", textAlign: "center" }}>
                <Box
                  component={"img"}
                  src={weather?.day?.condition?.icon}
                  alt="Weather"
                />
                <p className="text_bold">
                  {index === 0 ? "Today" : getWeekday(weather?.date)}
                </p>
                <p>{weather?.day?.avgtemp_c}&deg;C</p>
                <p>{weather?.day?.condition?.text}</p>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <div>
      <h1 className="header_text">
        {location?.name} Weather Forecast{" "}
        <span>
          {location?.region}, {location?.country}
        </span>
      </h1>
      <div className="inner_card_container">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component={"img"}
              src={currentWeather?.condition?.icon}
              alt="Weather"
              sx={{ mr: "10px" }}
            />
            <div className="mr_24px">
              <p className="text_bold">
                {currentWeather?.temp_c}&deg;C{" "}
                {currentWeather?.last_updated &&
                  `${extractDate(currentWeather?.last_updated)} (${getWeekday(
                    currentWeather?.last_updated
                  )})`}
              </p>
              <p className="text_lighter mt_4px">
                {currentWeather?.condition?.text}
              </p>
            </div>
          </Box>
          <Box
            sx={{
              mt: { xs: "10px", md: "0px" },
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div className="mr_24px">
              <p className="sub_header">Wind</p>
              <p className="text_lighter mt_4px">
                {currentWeather?.wind_kph}kmph
              </p>
            </div>
            <div className="mr_24px">
              <p className="sub_header">Precipitation</p>
              <p className="text_lighter mt_4px">
                {currentWeather?.precip_mm}mm
              </p>
            </div>
            <div className="mr_24px">
              <p className="sub_header">Pressure</p>
              <p className="text_lighter mt_4px">
                {currentWeather?.pressure_mb}mb
              </p>
            </div>
            <div className="mr_24px">
              <p className="sub_header">Humidity</p>
              <p className="text_lighter mt_4px">{currentWeather?.humidity}%</p>
            </div>
          </Box>
        </Box>
      </div>
      {renderFourteenDaysForecast()}
    </div>
  );
};

export default ForecastCard;
