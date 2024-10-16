import { Hono } from "hono";
import * as controller from "./controller";
import { initMiddleware } from "./middleware";

const bookRouter = new Hono();

bookRouter.use(initMiddleware);
bookRouter.post("/", controller.Post);
bookRouter.put("/",controller.updatePost)
bookRouter.get("/:id", controller.getPost);
bookRouter.get("/bulk", controller.getPosts);

export default bookRouter;
