import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import AppSnackbar from "../components/elements/AppSnackbar";
import FormSignin from "../components/fragments/FormSignin";
import AuthLayout from "../components/layouts/AuthLayout";



function SignIn() {
   const navigate = useNavigate();
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
 const token = await loginService(email, password);
login(token);
navigate("/");


    if (!token) {
      throw new Error("Token tidak ditemukan dari server");
    }

    login(token);          // simpan ke context + localStorage
    navigate("/");         // masuk dashboard
  } catch (err) {
    console.error("LOGIN ERROR:", err);

    setSnackbar({
      open: true,
      message:
        err.response?.data?.msg ||
        err.message ||
        "Login gagal",
      severity: "error",
    });
  }
};


  return (
    <>
    <AuthLayout>
      <FormSignin onSubmit={handleLogin} />

      	<AppSnackbar
  open={snackbar.open}
  message={snackbar.message}
  severity={snackbar.severity}
  onClose={() =>
    setSnackbar((prev) => ({ ...prev, open: false }))
  }
/>
    </AuthLayout>
    </>
  );
}

export default SignIn;
