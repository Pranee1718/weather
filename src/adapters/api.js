import axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const baseUrl = "https://api.weatherapi.com/v1/"

export const makeRequest = async (props) => {

  const mergedHeaders = props.headers ? { ...props.headers } : defaultHeaders;

  const config = {
    url: `${baseUrl}${props.endpoint}`,
    method: props.method,
    headers: mergedHeaders,
    params: props.params,
    data: props.body,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

const handleApiError = (error) => {
  if (error.response) {
    // Request made and server responded with a status code
    console.error("Response data:", error.response.data);
    console.error("Response status:", error.response.status);
    console.error("Response headers:", error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("Request:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error:", error.message);
  }
};
