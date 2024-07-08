import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import logo from "../../../assets/images/logo/logo.png";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { MdLibraryBooks } from "react-icons/md";
import { BiCommentDots } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { RiAdminFill } from "react-icons/ri";
import { TbBrowserPlus } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";
import useAdmin from "../../../hooks/useAdmin.jsx";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // get isAdmin value from the database
  const [isAdmin] = useAdmin();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        onClick={toggleDrawer}
        className="p-2 bg-primary-color text-white fixed z-50 lg:hidden"
      >
        {isOpen ? <FaXmark /> : <IoMdMenu />}
      </button>

      <div
        className={`fixed top-0 left-0 text-center h-screen bg-white text-primary p-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:transform-none`}
        style={{ width: "250px" }}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="mb-12" />
        </Link>
        <ul>
          {isAdmin ? (
            <>
              <li className="mb-4">
                <NavLink
                  to="/dashboard/orderList"
                  className={({ isActive }) => {
                    return isActive ? "dashboard-active" : "dashboard-default";
                  }}
                >
                  <div className="flex gap-2 items-center pl-5">
                    <CiBoxList
                      className={({ isActive }) => {
                        return isActive
                          ? "dashboard-active"
                          : "dashboard-default";
                      }}
                    />{" "}
                    Order List
                  </div>
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/dashboard/add-service"
                  className={({ isActive }) => {
                    return isActive ? "dashboard-active" : "dashboard-default";
                  }}
                >
                  <div className="flex gap-2 items-center pl-5">
                    <TbBrowserPlus
                      className={({ isActive }) => {
                        return isActive
                          ? "dashboard-active"
                          : "dashboard-default";
                      }}
                    />{" "}
                    Add Service
                  </div>
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/dashboard/makeAdmin"
                  className={({ isActive }) => {
                    return isActive ? "dashboard-active" : "dashboard-default";
                  }}
                >
                  <div className="flex gap-2 items-center pl-5">
                    <RiAdminFill
                      className={({ isActive }) => {
                        return isActive
                          ? "dashboard-active"
                          : "dashboard-default";
                      }}
                    />
                    Make Admin
                  </div>
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/dashboard/manage-services"
                  className={({ isActive }) => {
                    return isActive ? "dashboard-active" : "dashboard-default";
                  }}
                >
                  <div className="flex gap-2 items-center pl-5">
                    <LiaVectorSquareSolid
                      className={({ isActive }) => {
                        return isActive
                          ? "dashboard-active"
                          : "dashboard-default";
                      }}
                    />
                    Manage Services
                  </div>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mb-2">
                <NavLink
                  to="/dashboard/book"
                  className={({ isActive }) => {
                    return isActive ? "dashboard-active" : "dashboard-default";
                  }}
                >
                  <div className="flex gap-2 items-center pl-5">
                    <FaShoppingCart
                      className={({ isActive }) => {
                        return isActive
                          ? "dashboard-active"
                          : "dashboard-default";
                      }}
                    />{" "}
                    Book
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/dashboard/bookingList"
                  className={({ isActive }) => {
                    return isActive ? "dashboard-active" : "dashboard-default";
                  }}
                >
                  <div className="flex gap-2 items-center pl-5">
                    <MdLibraryBooks
                      className={({ isActive }) => {
                        return isActive
                          ? "dashboard-active"
                          : "dashboard-default";
                      }}
                    />{" "}
                    Booking List
                  </div>
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  to="/dashboard/review"
                  className={({ isActive }) => {
                    return isActive ? "dashboard-active" : "dashboard-default";
                  }}
                >
                  <div className="flex gap-2 items-center pl-5">
                    <BiCommentDots
                      className={({ isActive }) => {
                        return isActive
                          ? "dashboard-active"
                          : "dashboard-default";
                      }}
                    />
                    Review
                  </div>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
