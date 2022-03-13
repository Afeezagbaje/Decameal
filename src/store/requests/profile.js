import axios, { handleAxiosError, headers } from "../../axios";


export async function profile(payload) {
  try {
    const response = await axios.get("users/", headers());
    return response.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}