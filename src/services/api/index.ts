import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_BASE_URL;
const envAcceptLanguage = import.meta.env.VITE_ACCEPT_LANGUAGE;

const api = axios.create({ baseURL, headers: {} });
const acceptLanguage =
  localStorage?.getItem("acceptLanguage") || envAcceptLanguage;

api.interceptors.request.use(
  (config) => {
    config.headers["Accept-Language"] = acceptLanguage;
    const token = Cookies.get("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("401");
    }
    return Promise.reject(error);
  }
);

export default api;
