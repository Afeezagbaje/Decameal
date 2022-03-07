import axios, { handleAxiosError } from "../../axios";

export async function getUsers() {
  try {
    const config = {
      url: "/users",
      method: "GET",      
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw Error(handleAxiosError(error));
  }
}



