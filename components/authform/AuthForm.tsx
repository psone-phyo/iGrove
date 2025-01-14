import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import ProviderLogin from "./ProviderLogin";
import AuthFooter from "./AuthFooter";
  
type AuthFormProps = {
  children: React.ReactNode;
  title: string;
  showProvider: boolean;
  footerLabel: string;
  footerLink: string;
};

const AuthForm = ({
  children,
  title,
  showProvider,
  footerLabel,
  footerLink,
}: AuthFormProps) => {
  return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter className="flex flex-col justify-center items-start">
            <div>
            {showProvider && <ProviderLogin/>}
            </div>
            <AuthFooter footerLabel={footerLabel} footerLink={footerLink}/>
        </CardFooter>
      </Card>
  );
};

export default AuthForm;
