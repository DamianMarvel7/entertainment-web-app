import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Login from "./components/Login";
import MovieContextProvider from "./contexts/MovieContext";
import Main from "./page/Main";
import Signup from "./components/SignUp";
import { AuthContextProvider } from "./contexts/AuthContext";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  const mainElement = user ? <Main /> : <Navigate to="/login" />;
  const loginElement = !user ? <Login /> : <Navigate to="/" />;
  const signupElement = !user ? <Signup /> : <Navigate to="/" />;
  const router = createBrowserRouter([
    {
      path: "/",
      element: mainElement,
    },
    {
      path: "/login",
      element: loginElement,
    },
    {
      path: "/signup",
      element: signupElement,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
