import axios from "axios"
import {
  NEW_CONNECTOR12_USERNAME,
  NEW_CONNECTOR12_PASSWORD
} from "react-native-dotenv"
const newConnector = axios.create({
  baseURL: "https://sterz.com",
  auth: {
    username: NEW_CONNECTOR12_USERNAME,
    password: NEW_CONNECTOR12_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
