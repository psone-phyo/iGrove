"use client"
import { Session } from 'next-auth'
import React from 'react'
import { Button } from '../ui/button';
import { LogInIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const InfoButton = ({user}: Session) => {
    console.log(user);
    
  return (
    <div>
        {user?.email}
        {user?.email ? (
            <Button variant={"destructive"} onClick={()=>signOut()}>Log Out</Button>
        ) : (
            <Link href={'/auth/login'}>
                <Button>
                    <LogInIcon/>Log In
                </Button>
            </Link>
        )}
    </div>
  )
}

export default InfoButton