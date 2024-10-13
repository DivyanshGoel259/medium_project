import { Hono } from "hono";
import userRouter from "./user/router";
import bookRouter from "./blog/router";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// app.basePath("/");

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", bookRouter);

export default app;
