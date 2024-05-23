import styled from "styled-components";
import { TextField, Button } from "@mui/material";

export const CustomTextField = styled(TextField)`
  .MuiFormControl-root {
    background-color: rgb(32, 43, 59) !important;
  }
  & input {
    color: white;
    overflow: unset;
    padding: 18px 16px;
    height: 20px !important;
    min-height: 0px !important;
    border-radius: 8px;
    background: rgb(32, 43, 59);
    min-width: 0 !important;
    &::placeholder {
      color: white !important;
      opacity: 0.5;
    }
  }
  & input:-webkit-autofill {
    /* Styles for autofill */
    border-radius: 8px;
    height: 20px;
    box-shadow: 0 0 0 30px rgb(32, 43, 59) inset !important;
  }
  & fieldset {
    border-style: unset;
  }
  & svg {
    background-color: rgb(32, 43, 59);
  }
  border-radius: 8px;

  // Error text field styles
  ${(props) =>
    props.error &&
    `
    border: 1px solid #f05802;
    background-color: transparent;
    border-radius: 8px;
    width: 100%;
  `}
`;

export const CustomButton = (props) => {
  return (
    <Button
      sx={{
        p: "8px 12px",
        backgroundColor: "#f05802",
        color: "white",
        fontWeight: "bold",
        minWidth: "80px",
        height: "45px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#f05802",
        },
        ...props?.sx,
      }}
      onClick={props?.onClick}
    >
      {props?.loading ? "Loading..." : props?.children}
    </Button>
  );
}
export const CustomOutlinedButton = (props) => {
  return (
    <Button
      sx={{
        p: "8px 12px",
        backgroundColor: "rgb(11, 19, 30)",
        color: "#f05802",
        fontWeight: "bold",
        minWidth: "80px",
        height: "45px",
        border: "1px solid #f05802",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "rgb(11, 19, 30)",
        },
        ...props?.sx,
      }}
      onClick={props?.onClick}
    >
      {props?.loading ? "Loading..." : props?.children}
    </Button>
  );
};
