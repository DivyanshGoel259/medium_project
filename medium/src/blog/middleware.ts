import { Context, Next } from "hono";
import { verify } from "hono/jwt";
import { JWT_SECRET } from "../env";

export const initMiddleware = async (c: Context, next: Next) => {
  try {
    const jwt = c.req.header("authorization");
    if (!jwt) {
      return c.json({ error: "unAuthorized" });
    } else {
      const token = jwt.split(" ")[1];
      const payload = await verify(token, JWT_SECRET);
      if (!payload) {
        return c.json({ error: "unauthorized" });
      }
      c.set("userid", payload.id);
      await next();
    }
  } catch (err) {
    console.error(err);
    return c.json({ error: "unauthorized" });
  }
};
