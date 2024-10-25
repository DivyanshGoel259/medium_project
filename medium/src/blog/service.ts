import { prisma } from "../utils/db";

interface Post {
  id?: string,
  title: string,
  content: string,
  authorId: string
}


export const post = async ({ title, content, authorId }: Post) => {
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
    return post
  } catch (err:any) {
    throw new Error(err.message || "An error occurred while creating the post");
};
}


export const getPost = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true
          }
        },
      }
    });
    if (!post) {
      throw new Error("Post not found");
    }
    return post
  } catch (err:any) {
    throw new Error(err.message || "An error occurred while creating the post");
  }
};


export const updatePost = async ({ id, title, content, authorId }: Post) => {
  try {
    const updatedPost = await prisma.post.update({
      where: {
        id,
        authorId

      },
      data: {
        title,
        content
      }
    })

    if (!updatedPost) {
      throw new Error("Post can not be updated successfully");
    }
    return updatedPost
  } catch (err:any) {
    throw new Error(err.message || "An error occurred while creating the post");
  }
};



export const getAllPosts = async () => {
  try {
    const post = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            id: true,
            name: true,
          },
        },
      }
    })
    return post
  } catch (err:any) {
    const errorMessage = err.message|| "An error occurred while getting the posts"
    throw new Error(errorMessage);
}
};
