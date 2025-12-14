import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import FormSignin from "../components/fragments/FormSignin";

function Signin() {
  return (
    <AuthLayout>
      <FormSignin />
    </AuthLayout>
  );
}

export default Signin;
