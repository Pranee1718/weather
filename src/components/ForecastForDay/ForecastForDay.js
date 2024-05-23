import React from "react";
import "./ForeCastForday.css";

import { extractDate, getWeekday } from "../../Utils/Utils";
import { Box } from "@mui/material";
import UserGroupComponent from "../UserGroupComponent/UserGroupComponent";
import ClothingSuggestion from "../ClothingSuggestion/ClothingSuggestion";

const ForecastForDay = (props) => {
  const weatherForDay = props?.forecast?.day;
  const astro = props?.forecast?.astro;
  const location = props?.location;
  const formData=props?.formData

  return (
    <div className="ForeCastForday">
      <div className="mt_16px">     
         <h1 className="header_text">
        {props?.forecast?.date} ({getWeekday(props?.forecast?.date)}) <br />
        {location?.name} Weather Forecast{" "}
        <span>
          {location?.region}, {location?.country}
        </span>
      </h1>
      <Box className="inner_card_container" sx={{ width: "fit-content" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component={"img"}
              src={weatherForDay?.condition?.icon}
              alt="Weather"
              sx={{ mr: "10px" }}
            />
            <div className="mr_24px">
              <p className="text_bold">
                {weatherForDay?.avgtemp_c}&deg;C{" "}
                {weatherForDay?.last_updated &&
                  `${extractDate(weatherForDay?.last_updated)} (${getWeekday(
                    weatherForDay?.last_updated
                  )})`}
              </p>
              <p className="text_lighter mt_4px">
                {weatherForDay?.condition?.text}
              </p>
            </div>
          </Box>
          <Box
            sx={{
              display: "flex",
              ml: { xs: "0px", md: "100px" },
              mt: { xs: "20px", md: "0px" },
            }}
          >
            <div className="mr_24px">
              <p className="sub_header">Max </p>
              <p className="text_lighter mt_8px">
                {weatherForDay?.maxtemp_c}&deg;C
              </p>
            </div>
            <div className="mr_24px">
              <p className="sub_header">Min </p>
              <p className="text_lighter mt_8px">
                {weatherForDay?.mintemp_c}&deg;C
              </p>
            </div>
            <div className="mr_24px">
              <p className="sub_header">Avg </p>
              <p className="text_lighter mt_8px">
                {weatherForDay?.avgtemp_c}&deg;C
              </p>
            </div>

            <div className="mr_24px">
              <p className="sub_header">Precip.</p>
              <p className="text_lighter mt_8px">
                {weatherForDay?.totalprecip_mm} mm
              </p>
            </div>
            <div className="mr_24px">
              <p className="sub_header">Humidity</p>
              <p className="text_lighter mt_8px">
                {weatherForDay?.avghumidity}%
              </p>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: "20px",
          }}
        >
          <div className="mr_24px">
            <p className="sub_header">
              Sunrise:{" "}
              <span className="text_lighter ml_12px">{astro?.sunrise}</span>{" "}
            </p>
            <p className="sub_header mt_8px">
              Sunset:{" "}
              <span className="text_lighter ml_14px">{astro?.sunset}</span>{" "}
            </p>
          </div>
          <div className="mr_24px">
            <p className="sub_header">
              Moonrise:{" "}
              <span className="text_lighter ml_12px">{astro?.moonrise}</span>
            </p>
            <p className="sub_header mt_8px">
              Moonset:{" "}
              <span className="text_lighter ml_14px">{astro?.moonset}</span>{" "}
            </p>
          </div>
        </Box>
       
      </Box>
      </div>

      <Box>
        <div className="userGroup-clothing">
              <h1>Hello {formData?.role}</h1>
            <UserGroupComponent
              userGroup={formData?.role}
              weatherData={weatherForDay}
            />
            <ClothingSuggestion weatherData={weatherForDay} />
          </div>
        </Box>
    </div>
  );
};

export default ForecastForDay;
