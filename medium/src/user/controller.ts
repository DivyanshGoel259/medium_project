import { Context } from "hono";
import * as service from "./service";

export const Signup = async (c: Context) => {
  

  try {
    const { name, email, password } = await c.req.json();
    const response = await service.signup({ name, email, password });
    return c.json({data:response},200)
  } catch (err:any) {
    const errorMessage = err.message || "An error occurred during signup";
    return c.json({ error: {message:errorMessage} }, 400);
  }
};

export const Signin = async (c: Context) => {
  

  try {
    const { email, password } = await c.req.json();
    const response = await service.signin({email, password });   
    return c.json({data:response},200)
  } catch (err:any) {
    const errorMessage = err.message || "An error occurred during signin";
    return c.json({ error: {message:errorMessage}}, 400);
  }
};