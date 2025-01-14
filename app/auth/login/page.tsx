import AuthForm from '@/components/authform/AuthForm'
import React from 'react'

const LoginPage = () => {
  return <AuthForm title='Log in to your account' showProvider={true} footerLabel="Don't have an account?" footerLink='/auth/register'>
    <h1>Login Form</h1>
  </AuthForm>
}

export default LoginPage