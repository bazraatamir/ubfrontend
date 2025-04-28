// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ERR_NETWORK') {
      console.error('Network error - Please check if the backend server is running');
      alert('Сервертэй холбогдоход алдаа гарлаа. Сервер ажиллаж байгаа эсэхийг шалгана уу.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
