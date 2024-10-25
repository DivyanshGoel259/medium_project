import { baseUrl } from "../../env";
import { post } from "../../lib/network";
import { SignupType } from "./types";



export const signupReq = async ({ name, email, password }: SignupType) => {
  try {
    const data = await post(`${baseUrl}/user/signup`, { name, email, password });
    localStorage.setItem("token", data.token)
      
    return [data, null] as [string, null]
    

  } catch (err) {
    return [null, err] as [null, Error]
  }

};