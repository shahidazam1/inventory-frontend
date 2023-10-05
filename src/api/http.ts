import axios from "axios";

const baseURL = import.meta.env.PROD
  ? import.meta.env.VITE_APP_API_URL_PROD
  : import.meta.env.VITE_APP_API_URL_DEV;

const httpHeaders = {
  "Content-Type": "application/json",
};

export const http = axios.create({
  baseURL,
  headers: httpHeaders,
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.message === "Network Error") {
      alert("Network Error");
    }
    if (
      err.response.data.statusCode === 401 &&
      err.response.config.method === "get"
    ) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
