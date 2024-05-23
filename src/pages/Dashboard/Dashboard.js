import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CustomButton,
  CustomOutlinedButton,
  CustomTextField,
} from "../../components/common/CustomComponents/CustomComponents";
import { makeRequest } from "../../adapters/api";
import ForecastCard from "../../components/common/ForecastCard/ForecastCard";
import HourlyDetails from "../../components/HourlyDetails/HourlyDetails";
import SunRiseAndSunSet from "../../components/common/SunRiseAndSunSet/SunRiseAndSunSet";
import RoleSpecificForecast from "../RoleSpecificForecast/RoleSpecificForecast";

const Dashboard = () => {
  const [cityName, setCityName] = useState("Hyderabad");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastForDay, setForecastForDay] = useState(null);
  const [isRoleSpecific, setIsRoleSpecific] = useState(false);
  const [APIError, setAPIError] = useState("");

  const handleChange = (e) => {
    setCityName(e.target.value);
    setErrorMessage("");
  };
  const handleSubmit = () => {
    if (cityName !== "") {
      setLoading(true);
      makeRequest({
        method: "GET",
        endpoint: `forecast.json?key=0289cff98b964569b2270650241905&q=${cityName}&days=14&aqi=yes&alerts=yes`,
      })
        .then((res) => {
          setLoading(false);
          setWeatherData(res);
          setForecastForDay(res?.forecast?.forecastday?.[0]);
          setAPIError("");
        })
        .catch(() => {
          setLoading(false);
          setWeatherData(null);
          setForecastForDay(null);
          setAPIError("No matching location found.");
        });
    } else {
      setErrorMessage("Please enter the city name");
    }
  };

  useEffect(() => {
    
    handleSubmit();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  const handleBack = () => {
    handleSubmit();
    setIsRoleSpecific(false);
  };

  const handleTailoredForecasts = () => {
    setIsRoleSpecific(true);
  };

  const renderHeaderComponent = () => {
    return (
      <>
        <Box sx={{ px: { xs: "5%", sm: "10%", md: "20%" }, mt: "20px" }}>
          <CustomTextField
            placeholder="Enter City Name"
            fullWidth
            value={cityName}
            onChange={(e) => handleChange(e)}
            name={"cityName"}
            autoComplete="off"
            helperText={errorMessage}
            error={errorMessage}
          />
          <Box sx={{ mt: "20px", display: "flex" }}>
            <CustomOutlinedButton
              onClick={handleTailoredForecasts}
              sx={{ mr: "20px" }}
            >
              Tailored Forecasts
            </CustomOutlinedButton>
            <CustomButton loading={loading} onClick={handleSubmit}>
              Submit
            </CustomButton>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      {!isRoleSpecific ? (
        <>
          {renderHeaderComponent()}
          {weatherData && (
            <div className="card_container">
              <ForecastCard
                data={weatherData}
                setForecastForDay={setForecastForDay}
              />
              <SunRiseAndSunSet data={forecastForDay} />
              <HourlyDetails data={forecastForDay?.hour} />
            </div>
          )}
          {APIError && (
            <div className="card_container">
              <p className="header_text text_red mt_16px">{APIError}</p>
            </div>
          )}
        </>
      ) : (
        <RoleSpecificForecast handleBack={handleBack} />
      )}
    </>
  );
};

export default Dashboard;
