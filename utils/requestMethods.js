import axios from "axios";
const BASE_URL = "https://fitness-calculator.p.rapidapi.com/";
const API = process.env.REACT_APP_API_URL;
const KEY = process.env.REACT_APP_FITNESS_KEY;
export const apiRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});
export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": KEY,
    "X-RapidAPI-Host": `fitness-calculator.p.rapidapi.com`,
  },
});
