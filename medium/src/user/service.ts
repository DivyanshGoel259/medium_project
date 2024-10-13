import { JWT_SECRET } from "../env";
import { sign } from "hono/jwt";
import { prisma } from "../utils/db";

interface User {
  name: string;
  email: string;
  password: string;
}
interface response {
  token?: string;
  message: string;
  status: boolean;
}

export const Signup = async ({ name, email, password }: User) => {
  try {
    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    const token = await sign({ id: createdUser.id }, JWT_SECRET);
    let response: response = {
      token: token,
      message: "User Created Successfully",
      status: true,
    };
    return response;
  } catch (err) {
    console.error(err);
    let response: response = {
      message: "Signup Failed , Try Again later",
      status: false,
    };
    return response;
  }
};

export const Signin = async ({
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
      let response: response = {
        message: "Enter Valid User Details",
        status: false,
      };
      return response;
    } else {
      const token = await sign({ id: user.id }, JWT_SECRET);
      let response: response = {
        token,
        message: "Login Successfully",
        status: true,
      };
      return response;
    }
  } catch (err) {
    let response: response = {
      message: "Signin Failed",
      status: false,
    };
    return response;
  }
};
