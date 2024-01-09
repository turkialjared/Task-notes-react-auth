import axios from "axios";
import { getToken } from "../storage/storage";

const instance = axios.create({
  baseURL: "https://task-react-auth-backend.eapi.joincoded.com/api",
});
instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
