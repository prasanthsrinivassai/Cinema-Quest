import axios from "axios";
import { CONFIG } from "../App.config";

export const fetchData = async (apiSuffix) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${CONFIG.API_KEY}`,
    },
  };

  try {
    const response = await axios.get(CONFIG.BASE_URL + apiSuffix, options);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response.data);
  }
};
