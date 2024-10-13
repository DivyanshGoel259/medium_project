import { Hono } from "hono";
import * as controller from "./controller";
import { initMiddleware } from "./middleware";

const bookRouter = new Hono();

bookRouter.use(initMiddleware);
bookRouter.post("/", controller.Post);
// bookRouter.put("/")
bookRouter.get("/:id", controller.getPost);

export default bookRouter;
