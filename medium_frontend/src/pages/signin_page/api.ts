import { post } from "../../lib/Network";

const baseUrl = "http://127.0.0.1:8787/api/v1";
import { SigninType } from "./types";

export const signinReq = async ({ email, password }: SigninType) => {
  try {
    const data = await post(`${baseUrl}/user/signin`, { email, password });
    console.log({ data })
    localStorage.setItem("token", data.token)
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};
