import axios from "axios";
export const axiosInstance = axios.create({
  // locally
  // baseURL: "http://localhost:7777",
  // deployed on render.com
  baseURL: "https://amazon-backend-8mka.onrender.com",
});
