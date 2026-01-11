import React, { useContext } from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import FormSignin from "../components/fragments/FormSignin";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";


function SignIn() {
  const { login } = useContext(AuthContext);

  const handleLogin = async (email, password) => {
    try {
      const response = await loginService(email, password);

      if (!response || !response.refreshToken) {
        throw new Error("refreshToken tidak ditemukan");
      }

      login(response.refreshToken);
    } catch (err) {
      console.error(err?.msg || err?.message || err);
    }
  };

  return (
    <AuthLayout>
      <FormSignin onSubmit={handleLogin} />
    </AuthLayout>
  );
}

export default SignIn;
