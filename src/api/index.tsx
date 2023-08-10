import axios from "axios";

console.log(process.env.REACT_APP_API_URL);
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default api;
