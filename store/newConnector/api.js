import axios from "axios"
import {
  NEW_CONNECTOR4_USERNAME,
  NEW_CONNECTOR4_PASSWORD
} from "react-native-dotenv"
const newConnector = axios.create({
  baseURL: "https://amazon.com",
  auth: {
    username: NEW_CONNECTOR4_USERNAME,
    password: NEW_CONNECTOR4_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
