import axios from "axios";
import ApiClient from "./ApiClient";

const axiosInstance = axios.create({
  baseURL: "./data/",
});
const apiClient = new ApiClient(axiosInstance);

export async function fetchProperties() {
  try {
    const response = await apiClient.get("properties_data.json");
    return await response.data;
  } catch (error) {
    return { error };
  }
}
