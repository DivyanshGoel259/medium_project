import { JWT_SECRET } from "../env";
import { sign } from "hono/jwt";
import { prisma } from "../utils/db";

interface User {
  name: string;
  email: string;
  password: string;
}

export const signup = async ({ name, email, password }: User) => {
  try {
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    const token = await sign({ id: createdUser.id }, JWT_SECRET);
    if(!token){
      throw new Error("Failed to Generate Token")
    }
    return token 
  } catch (err:any) {
      if (err.code === 'P2002') {
        throw new Error("Email is already in use");
      }
      throw err;
    }
};

export const signin = async ({
  email,
  password,
}: Pick<User, "email" | "password">) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });
    if (!user) {
      throw new Error("Invalid Email or Password")
    }
    const token = await sign({ id: user.id }, JWT_SECRET);
    return token;

  } catch (err:any) {
    if (err.code === 'P2001') {
      throw new Error("No user with this email exists");
    }
    throw err
  }
};
