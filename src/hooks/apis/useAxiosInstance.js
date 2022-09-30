import axios from "axios";
import { ENDPOINT } from "../../constants";

const BASE_URL = ENDPOINT;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
