import { z } from "zod"


const signupInputType = z.object({
    name:z.string().optional(),
    email:z.string().email(),
    password:z.string().min(8)
})

export type SignupType = z.infer<typeof signupInputType>;