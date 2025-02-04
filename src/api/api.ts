import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org",
  headers: {
    "Content-Type": "application/json",
  },
});

const keyInterceptor = (config) => {
  return {
    ...config,
    params: {
      ...config.params,
      appid: process.env.NEXT_PUBLIC_API_KEY,
    },
  };
};

api.interceptors.request.use(keyInterceptor);
