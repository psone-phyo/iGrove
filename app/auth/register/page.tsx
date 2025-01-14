import AuthForm from '@/components/authform/AuthForm'
import React from 'react'

const SignupPage = () => {
  return <AuthForm title='Create an account' showProvider={false} footerLabel="Already have an account?" footerLink='/auth/login'>
    <h1>Signup Form</h1>
  </AuthForm>
}

export default SignupPage