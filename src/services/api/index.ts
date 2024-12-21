import axios from "axios";
import Cookies from "js-cookie";
const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL,
  headers: {},
});

api.interceptors.request.use(
  (config) => {
    Cookies.set("token", "test-bearer-token");
    const token = Cookies.get("token");
    console.log("token: ", token);
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
