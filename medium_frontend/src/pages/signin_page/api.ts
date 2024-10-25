import { baseUrl } from "../../env";
import { post } from "../../lib/network";

import { SigninType } from "./types";

export const signinReq = async ({ email, password }: SigninType) => {
  try {
    const data = await post(`${baseUrl}/user/signin`, { email, password });
    if (data.Message) {
      throw new Error(data.Message)
    } else {
      localStorage.setItem("token", data.token)
      return [data, null] as [string, null]
    }

  } catch (err) {
    return [null, err] as [null, Error]
  }

};