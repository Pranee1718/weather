import React from "react";
import { Box } from "@mui/material";
import { getWeekday } from "../../../Utils/Utils";
import "./SunRiseAndSunSet.css";

const SunRiseAndSunSet = (props) => {
  const { data, hideHeader } = props;

  return (
    <div className="weather-container">
      {!hideHeader && <h1 className="header_text">
        {data?.date} ({getWeekday(data?.date)}) Weather
      </h1>}
      <Box className="inner_card_container" sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: {xs: "flex-start", md: "space-between"}}}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <div className="mr_24px">
            <p className="sub_header">
              Sunrise:{" "}
              <span className="text_lighter ml_12px">
                {data?.astro?.sunrise}
              </span>{" "}
            </p>
            <p className="sub_header mt_8px">
              Sunset:{" "}
              <span className="text_lighter ml_14px">
                {data?.astro?.sunset}
              </span>{" "}
            </p>
          </div>
          <div className="mr_24px">
            <p className="sub_header">
              Moonrise:{" "}
              <span className="text_lighter ml_12px">
                {data?.astro?.moonrise}
              </span>
            </p>
            <p className="sub_header mt_8px">
              Moonset:{" "}
              <span className="text_lighter ml_14px">
                {data?.astro?.moonset}
              </span>{" "}
            </p>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mt: {xs: "10px", md: "0px"}
          }}
        >
          <div className="mr_24px">
            <p className="sub_header">Max </p>
            <p className="text_lighter mt_8px">{data?.day?.maxtemp_c}&deg;C</p>
          </div>
          <div className="mr_24px">
            <p className="sub_header">Min </p>
            <p className="text_lighter mt_8px">{data?.day?.mintemp_c}&deg;C</p>
          </div>
          <div className="mr_24px">
            <p className="sub_header">Avg </p>
            <p className="text_lighter mt_8px">{data?.day?.avgtemp_c}&deg;C</p>
          </div>

          <div className="mr_24px">
            <p className="sub_header">Precip.</p>
            <p className="text_lighter mt_8px">
              {data?.day?.totalprecip_mm} mm
            </p>
          </div>
          <div className="mr_24px">
            <p className="sub_header">Humidity</p>
            <p className="text_lighter mt_8px">{data?.day?.avghumidity}%</p>
          </div>
          <div className="mr_24px">
            <p className="sub_header"> Max Wind</p>
            <p className="text_lighter mt_8px">{data?.day?.maxwind_kph} kmph</p>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default SunRiseAndSunSet;
