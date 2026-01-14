import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";

import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ErrorPage from "./pages/error";
import MainLayout from "./components/layouts/MainLayout";
import Expense from "./pages/Expenses";




function App() {
  const RequireAuth = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" replace />;
  };

  const NotRequireAuth = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? <Navigate to="/" replace /> : children;
  };
const myRouter = createBrowserRouter([
  {
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/balance", element: <BalancePage /> },
      { path: "/expense", element: <Expense /> },
    ],
  },
  {
    path: "/login",
    element: (
      <NotRequireAuth>
        <SignInPage />
      </NotRequireAuth>
    ),
  },
  {
    path: "/register",
    element: (
      <NotRequireAuth>
        <SignUpPage />
      </NotRequireAuth>
    ),
  },
]);

  return <RouterProvider router={myRouter} />;
}

export default App;
