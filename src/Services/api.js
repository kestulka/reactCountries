import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/all";

const getAllCountries = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.data !== undefined) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log("error fetching countries:", error);
  }
};

export default getAllCountries;
