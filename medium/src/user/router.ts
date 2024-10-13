import { Hono } from "hono";
import * as controller from "./controller";

const userRouter = new Hono();

userRouter.post("/signup", controller.Signup);
userRouter.post("/signin", controller.Signin);

export default userRouter;
