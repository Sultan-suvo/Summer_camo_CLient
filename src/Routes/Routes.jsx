import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
    },
    {
        path: 'signup',
        element:<Register></Register>
    },
    ]
  },
]);

export default router