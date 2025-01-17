'use client'
import AuthForm from "@/components/authform/AuthForm";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/types/login-schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {useAction} from 'next-safe-action/hooks'
import { login } from "@/server/actions/Auth-actions";

const LoginPage = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });
  
  const {execute, result, status} = useAction(login);

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    const {email, password} = values;
    execute({email, password});
  }
  return (
    <AuthForm
      title="Log in to your account"
      showProvider={true}
      footerLabel="Don't have an account?"
      footerLink="/auth/register"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="igrove@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={'link'} className="flex justify-end items-center w-full text-sky-700">
            <Link href={'/auth/reset'}>Forgot Password?</Link>
          </Button>
        </div>
        <Button className="w-full mt-3 bg-transparent text-sky-700 border border-sky-700 hover:text-white hover:bg-sky-700">Login</Button>
        </form>
      </Form>
    </AuthForm>
  );
};

export default LoginPage;
