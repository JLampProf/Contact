import axios from "axios";

export const axios = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL, //BaseURL for all requests
});
