import { FormControlLabel, Radio } from "@mui/material";
 
const CustomRadioButtonField = (props) => {
  const { value, id, label } = props;
  return (
    <FormControlLabel
      value={value}
      id={id}
      control={
        <Radio
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 24,
              fill: "#f05802",
            },
            color: "#F05802",
          }}
        />
      }
      label={label}
    />
  );
};
 
export default CustomRadioButtonField;