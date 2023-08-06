import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-18-207-0-136.compute-1.amazonaws.com:8080",
  headers: {
    "Content-Type": "multipart/form-data",
    "Accept": "application/json",
  }
});