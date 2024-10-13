import { PrismaClient } from "@prisma/client/edge";
import { DATABASE_URL } from "../env";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prisma = new PrismaClient({
  datasourceUrl: DATABASE_URL,
}).$extends(withAccelerate());
