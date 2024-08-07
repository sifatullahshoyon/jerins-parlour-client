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
import AdminRoute from "./AdminRoute/AdminRoute";
import ErrorElement from "../components/ErrorElement";
import UpdateItem from "../pages/Dashboard/Admin/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import Portfolio from "../pages/Home/Portfolio/Portfolio";
import OurTeam from "../pages/Home/OurTeam/OurTeam";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our-portfolio",
        element: <Portfolio />,
      },
      {
        path: "our-team",
        element: <OurTeam />,
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
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      // Admin Routes:
      {
        path: "/dashboard/orderList",
        element: (
          <AdminRoute>
            <OrderList />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-service",
        element: (
          <AdminRoute>
            <AddServices />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/makeAdmin",
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-services",
        element: (
          <AdminRoute>
            <ManageServices />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jerins-parlour-server-sooty.vercel.app/services/${params.id}`),
      },
    ],
  },
]);
