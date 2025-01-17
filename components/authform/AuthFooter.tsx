import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
type AuthFooterProps = {
    footerLabel: string,
    footerLink: string
}
const AuthFooter = ({footerLabel, footerLink}: AuthFooterProps) => {
  return <Button variant={'link'} className='flex justify-center items-center w-full text-sky-700'>
              <Link href={footerLink}>{footerLabel}</Link>
          </Button>
  
}

export default AuthFooter