import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8080",
  baseURL: "http://pickmytours.com:8080",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
});