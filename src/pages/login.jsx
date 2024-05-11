import React from "react";
import { AuthLayout } from "../components/Layouts/AuthLayout";
import { FormLogin } from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login Page" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
