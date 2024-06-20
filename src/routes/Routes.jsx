import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layouts/MainLayout";
import ContactUs from "../pages/Home/ContactUs/ContactUs";
import Login from "../pages/Home/Login/Login";
import Registration from "../pages/Home/Registration/Registration";
import Test from "../components/Test";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: "error",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "dashboard",
        element: <Registration />,
      },
      {
        path: "test",
        element: <PrivateRoute><Test /></PrivateRoute>,
      },
    ],
  },
]);
