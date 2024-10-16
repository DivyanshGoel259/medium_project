import { post } from "../../lib/Network";

const baseUrl = "http://127.0.0.1:8787/api/v1";
import { SignupType } from "./types";

export const signupReq = async ({ name, email, password }: SignupType) => {
  try {
    const data = await post(`${baseUrl}/user/signup`, { name, email, password });
    localStorage.setItem("token", data.token)
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};
