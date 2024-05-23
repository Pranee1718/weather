import { Box, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import CustomRadioButtonField from "../../components/common/CustomRadioButton/CustomRadioButton";
import DatePickerValue from "../../components/common/DatePicker/DatePicker";
import {
  CustomButton,
  CustomOutlinedButton,
  CustomTextField,
} from "../../components/common/CustomComponents/CustomComponents";
import dayjs from "dayjs";
import { makeRequest } from "../../adapters/api";
import { convertToYYYYMMDD, isMoreThan14Days } from "../../Utils/Utils";
import HourlyDetails from "../../components/HourlyDetails/HourlyDetails";
import ForecastForDay from "../../components/ForecastForDay/ForecastForDay";
import "./RoleSpecificForecast.css";

const RoleSpecificForecast = (props) => {
  const [formData, setFormData] = useState({
    role: "Farmer",
    cityName: "",
    date: dayjs(new Date()),
  });
  const [location, setLocation] = useState(null);
  const [forecastForDay, setForecastForDay] = useState(null);
  const [loading, setLoading] = useState(false);
  const [APIError, setAPIError] = useState("");

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (formData?.cityName) {
      setLoading(true);
      setAPIError("");
      if (isMoreThan14Days(formData?.date?.$d)) {
        makeRequest({
          method: "GET",
          endpoint: `future.json?key=0289cff98b964569b2270650241905&q=${
            formData.cityName
          }&dt=${convertToYYYYMMDD(formData?.date?.$d)}`,
        })
          .then((res) => {
            setLoading(false);
            setLocation(res?.location);
            setForecastForDay(res?.forecast?.forecastday?.[0]);
            setAPIError("");
          })
          .catch(() => {
            setLoading(false);
            setAPIError("No matching location found.");
            setForecastForDay(null);
          });
      } else {
        makeRequest({
          method: "GET",
          endpoint: `forecast.json?key=0289cff98b964569b2270650241905&q=${formData.cityName}&days=14&aqi=yes&alerts=yes`,
        })
          .then((res) => {
            setLoading(false);
            setLocation(res?.location);
            setForecastForDay(
              res?.forecast?.forecastday?.find(
                (day) => day?.date === convertToYYYYMMDD(formData?.date?.$d)
              )
            );
            setAPIError("");
          })
          .catch(() => {
            setLoading(false);
            setAPIError("No matching location found.");
            setForecastForDay(null);
          });
      }
    }
  };

  const renderCategoryComponent = () => {
    return (
      <Box sx={{ my: "15px" }}>
        <h1 className="header_text">Select Category</h1>
        <RadioGroup
          sx={{
            mt: "5px",
            display: "flex",
            flexDirection: "row",
          }}
          onChange={(e) => {
            handleChange("role", e.target.value);
          }}
          value={formData?.role}
        >
          <CustomRadioButtonField value={"Farmer"} label={"Farmer"} />
          <CustomRadioButtonField value={"Traveler"} label={"Traveler"} />
          <CustomRadioButtonField
            value={"Event Planner"}
            label={"Event Planner"}
          />
        </RadioGroup>
      </Box>
    );
  };

  const renderFormFields = () => {
    return (
      <form>
        <Box sx={{ display: "flex" }}>
          <CustomTextField
            placeholder="Enter City Name"
            fullWidth
            value={formData.cityName}
            onChange={(e) => handleChange("cityName", e.target.value)}
            name={"cityName"}
            sx={{ width: "300px", pt: "8px", mr: "20px" }}
            autoComplete="off"
            //   helperText={errorMessage}
            //   error={errorMessage}
          />
          <DatePickerValue value={formData.date} handleChange={handleChange} />
        </Box>
        <Box sx={{ mt: "10px" }}>
          <CustomOutlinedButton
            sx={{ mt: "10px", height: "45px", mr: "20px" }}
            onClick={props?.handleBack}
          >
            Back to Dashboard
          </CustomOutlinedButton>
          <CustomButton
            loading={loading}
            sx={{ mt: "10px", height: "45px" }}
            onClick={handleSubmit}
          >
            Submit
          </CustomButton>
        </Box>
      </form>
    );
  };
  return (
    <div className="card_container">
      {renderCategoryComponent()}
      {renderFormFields()}
      {forecastForDay && (
        <>
          <ForecastForDay
            location={location}
            forecast={forecastForDay}
            formData={formData}
          />

          <HourlyDetails data={forecastForDay?.hour} />
        </>
      )}
      {APIError && <p className="header_text text_red mt_16px">{APIError}</p>}
    </div>
  );
};

export default RoleSpecificForecast;
