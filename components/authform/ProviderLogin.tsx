import React from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
const ProviderLogin = () => {
  return (
    <div className='gap-2 flex justify-center items-center'>
        <Button variant={"outline"}><FcGoogle/>Sign in with Google</Button>
        <Button variant={"outline"}><FaGithub/>Sign in with Github</Button>
    </div>
  )
}

export default ProviderLogin