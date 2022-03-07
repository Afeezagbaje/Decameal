import axios, { handleAxiosError } from "../../axios";

export async function login(payload) { // {email: ola@gmail.com, password: ola123}
  try {
    const config = {
      url: "/login",
      method: "POST",
      payload
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error)
    throw Error(handleAxiosError(error));
  }
}
