import { Context } from "hono";

import * as service from "./service";

export const Post = async (c: Context) => {
  const { title, content } = await c.req.json();
  const authorId = c.get("userid");

  try {
    const response = await service.Post({ title, content, authorId });

    if (response.status) {
      return c.json(
        {
          response,
        },
        200
      );
    } else {
      return c.json(
        {
          response,
        },
        500
      );
    }
  } catch (err) {
    const response = {
      message: "Failed to create post",
      status: false,
    };
    console.error(err);
    return c.json({
      response,
    });
  }
};

export const getPost = async (c: Context) => {
  const postID = c.req.param("id");

  try {
    const response = await service.getPost(postID);
    if (response.status) {
      return c.json({ response }, 200);
    } else {
      return c.json({ response }, 400);
    }
  } catch (err) {
    console.error(err);
    return c.json({
      message: "Can't Fetch Post , try again later",
      status: false,
    });
  }
};

export const updatePost = async (c: Context) => {
  const authorId = c.get("userid");
  const {id,title,content} = await c.req.json()
  try {
    const response = await service.updatePost({id,title,content,authorId});
    if (response.status) {
      return c.json({ response }, 200);
    } else {
      return c.json({ response }, 400);
    }
  } catch (err) {
    console.error(err);
    return c.json({
      message: "Can't Update Post , try again later",
      status: false,
    });
  }
};
