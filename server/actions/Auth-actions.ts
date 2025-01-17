"use server"

import { LoginSchema } from "@/types/login-schema";
import { RegisterSchema } from "@/types/register-shcema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { eq } from "drizzle-orm";
import {users} from '../schema'

const actionClient = createSafeActionClient();
const bcrypt = require('bcryptjs');
export const login = actionClient.schema(LoginSchema).action(async ({parsedInput: {email, password}}) => {
    console.log("login action",email, password);
    
    return {success: "successfully logged in"}
})

export const register = actionClient.schema(RegisterSchema).action(async ({parsedInput: {username,email,password}})=>{
    const hashPsw = await bcrypt.hash(password, 10);
    console.log(hashPsw);
    
    const existedUser = await db.query.users.findFirst({where: eq(users.email,email)})
    if (existedUser){
        if (!existedUser.emailVerified){
            return {success: "Email verification sent"}
        }
    }else{
        return {error: "Email already taken"}
    }
    console.log("Register action",username,email, password);
    return {success: "successfully registered"}
})