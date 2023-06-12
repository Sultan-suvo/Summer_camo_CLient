import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddClasses from "../pages/Dashboard/AddClasses/AddClasses";
import InstructorClasses from "../pages/Dashboard/InstructorClasses/InstructorClasses";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses/EnrolledClasses";
import Innstructor from "../pages/Innstructor/Innstructor";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import FeedBack from "../pages/Dashboard/ManageClasses/FeedBack";
import Payment from "../pages/Dashboard/Payment/Payment";


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
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructors",
        element: <Innstructor></Innstructor>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <Register></Register>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'manageclasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: "feedback",
        element: <FeedBack></FeedBack>,
      },
      {
        path: 'manageusers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'addClasses',
        element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
      },
      {
        path: 'myClasses',
        element: <InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute>
      },
      {
        path: 'selectedClasses',
        element: <PrivateRoute><SelectedClass></SelectedClass></PrivateRoute>
      },
      {
        path: 'enrolledClasses',
        element: <PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      }
    ]
  }
]);

export default router