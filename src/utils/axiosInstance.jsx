// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.emehmon.xdevs.uz/api/v1/', // Set your base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
