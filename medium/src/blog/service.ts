import { connect } from "cloudflare:sockets";
import { prisma } from "../utils/db";

interface Post {
  id?:string,
  title: string,
  content: string,
  authorId: string
}

interface response {
  post?: JSON;
  message: string;
  status: boolean;
}
export const Post = async ({ title, content, authorId }: Post) => {
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    });
    if (post.id) {
      let response: response = {
        message: "Post created successfully",
        status: true,
      };
      return response;
    } else {
      let response: response = {
        message: "Failed to create post",
        status: false,
      };
      return response;
    }
  } catch (err) {
    console.error(err);
    let response = {
      message: "internal server error , try again later",
      status: false,
    };
    return response;
  }
};

export const getPost = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    if (!post) {
      let response = {
        message: "Post Doesn't Exist",
        status: false,
      };
      return response;
    } else {
      let response = {
        post: post,
        message: "Post fetched succesfully ",
        status: true,
      };
      return response;
    }
  } catch (err) {
    console.error(err);
    let response = {
      message: "internal server error , try again later",
      status: false,
    };
    return response;
  }
};


export const updatePost = async ({id,title,content,authorId}:Post) => {
  try {
    const updatedPost = await prisma.post.update({
      where:{
        id,
        authorId

      },
      data:{
        title,
        content
      }
    })

    if (!updatedPost) {
      let response = {
        message: "Post is not updated",
        status: false,
      };
      return response;
    } else {
      let response = {
        message: "Post Updated succesfully ",
        status: true,
      };
      return response;
    }
  } catch (err) {
    console.error(err);
    let response = {
      message: "internal server error , try again later",
      status: false,
    };
    return response;
  }
};
