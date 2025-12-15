// src/App.jsx
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import DashboardPage from "./pages/dashboard";
import ErrorPage from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
