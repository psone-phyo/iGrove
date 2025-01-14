import Link from 'next/link'
import React from 'react'
type AuthFooterProps = {
    footerLabel: string,
    footerLink: string
}
const AuthFooter = ({footerLabel, footerLink}: AuthFooterProps) => {
  return <Link href={footerLink}>{footerLabel}</Link>
}

export default AuthFooter