import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Login from "./components/Login";
import Main from "./page/Main";
import Signup from "./components/SignUp";
import { useAuthContext } from "./hooks/useAuthContext";
import RootLayout from "./root/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
function App() {
  // const { user } = useAuthContext();
  // const router = createBrowserRouter([
  //   {
  //     index: true,
  //     element: user ? <Main /> : <Navigate to="/login" />,
  //   },
  //   {
  //     path: "/login",
  //     element: !user ? <Login /> : <Navigate to="/" />,
  //   },
  //   {
  //     path: "/signup",
  //     element: !user ? <Signup /> : <Navigate to="/" />,
  //   },
  //   {
  //     path: "*",
  //     element: user ? <Main /> : <Navigate to="/login" />,
  //   },
  // ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
