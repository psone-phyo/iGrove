import React from 'react'
import Logo from './Logo'
import InfoButton from './InfoButton'
import { authOptions } from '@/server/auth'
import { getServerSession, Session } from 'next-auth'

const NavBar = async () => {
    const session = (await getServerSession(authOptions as any)) as Session | null;
    
  return (
    <div className='flex justify-between items-center py-5'>
        <Logo/>
        <InfoButton user={session?.user} expires=''/>
    </div>
  )
}

export default NavBar