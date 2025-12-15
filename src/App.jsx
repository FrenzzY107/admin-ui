import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-center items-center min-h-screen gap-4">
        <Link
          to="/signin"
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-4 py-2 bg-primary text-white rounded"
        >
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
