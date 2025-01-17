import {z} from 'zod';

export const RegisterSchema = z.object({
    username: z.string().min(1,{message: "Please enter username"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8,{message: "Password must be at least 8 characters"})
})