'use client'
import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { signIn, signOut, useSession } from "next-auth/react";

const ProviderLogin = () => {
  return (
    <div className="gap-2 flex justify-center items-center bg-white sm:flex-row flex-col">
      <Button variant={'outline'} onClick={()=>signIn('google',{redirect:false, callbackUrl: '/'})} className="w-full">
        <><FcGoogle/>Sign in with Google</>
      </Button>
      <Button variant={'outline'} onClick={()=>signIn('github',{redirect:false, callbackUrl: '/'})} className="w-full bg-gray-500 hover:bg-gray-600">
        <><FaGithub/>Sign in with Github</>
      </Button>
    </div>
  );
};

export default ProviderLogin;
