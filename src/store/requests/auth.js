import axios, { handleAxiosError } from "../../axios";

export async function login(payload) {
  try {
    const config = {
      url: "auth/login/",
      method: "POST",
      data: payload,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw handleAxiosError(error);
  }
}
