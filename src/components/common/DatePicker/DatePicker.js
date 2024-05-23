import React ,{useState,useEffect }from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./DatePicker.css";
import { Box } from "@mui/material";


const DatePickerValue = (props) => {
  const [open, setOpen] = React.useState(false);
  const maxDate = dayjs().add(300, "day");

  const handleClick = () => {
    setOpen(true);
    console.log("true")
  };
  useEffect(() => {
    setOpen(false);
  }, [maxDate])

  const handleChange = (value) => {
    props?.handleChange("date", value);
    handleClose(); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box onClick={handleClick} sx={{ width: "300px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            open={open}
            value={props?.value}
            onChange={(newValue) => {
              handleChange(newValue);
            }}
            disablePast
            className="date_picker"
            onClose={handleClose}
            maxDate={maxDate}
            sx={{ width: "300px" }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerValue;
