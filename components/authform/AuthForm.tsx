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
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {children}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col justify-center items-start">
            <div className="w-full">
            {showProvider && <ProviderLogin />}
            <div className="mt-1">
            <AuthFooter footerLabel={footerLabel} footerLink={footerLink} />
            </div>
            </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
