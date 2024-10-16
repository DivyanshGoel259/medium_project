import { z } from "zod"


const signinInputType = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export type SigninType = z.infer<typeof signinInputType>;