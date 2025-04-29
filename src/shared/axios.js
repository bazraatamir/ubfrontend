// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://azjargaliinsodsolongo.com/backend/api",
  withCredentials: true,
});

export default axiosInstance;
