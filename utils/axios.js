import axios from "axios";
export default axios.create({
  baseURL: "http://43.204.235.164:5002/",
  //baseURL: "https://gud-guru-api-rohitbansal11.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});