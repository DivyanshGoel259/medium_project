import { Context } from "hono";

import * as service from "./service";

export const Post = async (c: Context) => {

  try {
    const { title, content } = await c.req.json();
    const authorId = c.get("userid");

    const response = await service.post({ title, content, authorId });
    if (!response.id) {
      throw new Error("Unable to create post")
    }
    return c.json({ data: response }, 200)

  } catch (err: any) {
    const errorMessage = err.message || "An error occurred While posting";
    return c.json({ error: { message: errorMessage } }, 400);
  }
};

export const getPost = async (c: Context) => {


  try {
    const postID = c.req.param("id");
    const response = await service.getPost(postID);
    if (!response.id) {
      throw new Error("Unable to fetch post")
    }
    return c.json({ data: response }, 200)

  } catch (err: any) {
    const errorMessage = err.message || "An error occurred While fetching post";
    return c.json({ error: { message: errorMessage } }, 400);
  }
};



export const updatePost = async (c: Context) => {

  try {
    const authorId = c.get("userid");
    const { id, title, content } = await c.req.json()
    const response = await service.updatePost({ id, title, content, authorId });
    if (!response.id) {
      throw new Error("Unable to update the post")
    }
    return c.json({ data: response }, 200)

  } catch (err: any) {
    const errorMessage = err.message || "An error occurred While updating the post";
    return c.json({ error: { message: errorMessage } }, 400);
  }
};


export const getAllPosts = async (c: Context) => {
  try {
    const response = await service.getAllPosts();
    if (!response) {
      throw new Error("Unable to fetch posts")
    }
    return c.json({ data: response }, 200)

  } catch (err: any) {
    const errorMessage = err.message || "An error occurred While fetching the posts";
    return c.json({ error: { message: errorMessage } }, 400);
  }
};