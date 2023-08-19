import axios from "axios";
export const baseUrl = " http://localhost:3030";
export const Instance = axios.create({
  baseURL: baseUrl,
});
