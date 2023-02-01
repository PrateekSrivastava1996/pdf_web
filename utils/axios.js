import axios from "axios";
export default axios.create({
  baseURL: "http://52.66.235.96:5002/",
  //baseURL: "https://gud-guru-api-rohitbansal11.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});
