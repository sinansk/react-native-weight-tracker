import axios from "axios";
const BASE_URL = "https://fitness-calculator.p.rapidapi.com/";

const KEY = process.env.REACT_APP_FITNESS_KEY;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': KEY,
    'X-RapidAPI-Host': `fitness-calculator.p.rapidapi.com`,
  },
});
