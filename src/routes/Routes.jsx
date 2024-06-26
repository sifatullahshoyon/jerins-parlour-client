import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layouts/MainLayout";
import ContactUs from "../pages/Home/ContactUs/ContactUs";
import Login from "../pages/Home/Login/Login";
import Registration from "../pages/Home/Registration/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import Book from "../pages/Dashboard/User/Book/Book";
import BookingList from "../pages/Dashboard/User/BookingList/BookingList";
import Review from "../pages/Dashboard/User/Review/Review";
import OrderList from "../pages/Dashboard/Admin/OrderList/OrderList";
import AddServices from "../pages/Dashboard/Admin/AddServices/AddServices";
import MakeAdmin from "../pages/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "../pages/Dashboard/Admin/ManageServices/ManageServices";

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
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/book",
        element: <Book />,
      },
      {
        path: "/dashboard/bookingList",
        element: <BookingList />,
      },
      {
        path: "/dashboard/review",
        element: <Review />,
      },
      // Admin Routes:
      {
        path: "/dashboard/orderList",
        element: <OrderList />,
      },
      {
        path: "/dashboard/add-service",
        element: <AddServices />,
      },
      {
        path: "/dashboard/makeAdmin",
        element: <MakeAdmin />,
      },
      {
        path: "/dashboard/manage-services",
        element: <ManageServices />,
      },
    ],
  },
]);
