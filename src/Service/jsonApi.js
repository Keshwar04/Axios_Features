import axios from "axios";
export const JsonApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
