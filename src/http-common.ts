import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3500/",
  headers: {
    "Content-type": "application/json",
  },
});