import React, { useContext, useState } from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import FormSignin from "../components/fragments/FormSignin";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import AppSnackbar from "../components/elements/AppSnackbar";



function SignIn() {
  const { login } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); 
  
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await loginService(email, password);

      if (!response || !response.refreshToken) {
        throw new Error("refreshToken tidak ditemukan");
      }

      login(response.refreshToken);
    } catch (err) {
      setSnackbar({ open: true, message: err.msg, severity: "error" });
    }
  };

  return (
    <AuthLayout>
      <FormSignin onSubmit={handleLogin} />

      	<AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
    </AuthLayout>
  );
}

export default SignIn;
