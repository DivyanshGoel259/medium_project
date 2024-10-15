import { Context } from "hono";
import * as service from "./service";

export const Signup = async (c: Context) => {
  const { name, email, password } = await c.req.json();

  try {
    const response = await service.Signup({ name, email, password });
    if (response.status) {
      return c.json(
        {
          response,
        },
        200
      );
    } else {
      return c.json({ response });
    }
  } catch (err) {
    console.error(err);
    return c.json({ Message: "Signup Failed , Try Again later" });
  }
};

export const Signin = async (c: Context) => {
  const { email, password } = await c.req.json();

  try {
    const response = await service.Signin({ email, password });
    if (response.status) {
      return c.json({ response }, 200);
    } else {
      return c.json({ response }, 403);
    }
  } catch (err) {
    return c.json({ Message: "Signin Failed , Try Again later" });
  }
};
