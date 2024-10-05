import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const apiRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});
