// utils/axios-config.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com", // Replace with your actual base URL
});

export default instance;
