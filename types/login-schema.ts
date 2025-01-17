import { z } from "zod"

export const LoginSchema = z.object({
    email: z.string().nonempty({message: "Please enter E-mail"}).email({message: 'Invalid Email Address'}),
    password: z.string().nonempty({message: "Please enter password"}),
    code: z.string().optional()
})
