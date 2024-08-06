// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://your-backend-url.com/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
