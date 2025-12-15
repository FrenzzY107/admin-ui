import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    			<div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary text-white">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary text-white">
            Register
          </Link>
        </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
