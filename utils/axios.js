import axios from "axios";
export default axios.create({
  baseURL: "http://13.232.161.74:5002/",
  //baseURL: "https://gud-guru-api-rohitbansal11.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});