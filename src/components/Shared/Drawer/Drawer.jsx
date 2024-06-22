import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import logo from "../../../assets/images/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { MdLibraryBooks } from "react-icons/md";
import { BiCommentDots } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        onClick={toggleDrawer}
        className="p-2 bg-blue-500 text-white fixed z-50 lg:hidden"
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
          <li className="mb-2">
            <NavLink
              to="/dashboard/book"
              className={({ isActive }) => {
                return isActive ? "dashboard-active" : "dashboard-default";
              }}
            >
              <div className="flex gap-2 items-center pl-5">
                <FaShoppingCart  className={({ isActive }) => {
                return isActive ? "dashboard-active" : "dashboard-default";
              }} /> Book
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
                <MdLibraryBooks className={({ isActive }) => {
                return isActive ? "dashboard-active" : "dashboard-default";
              }} /> Booking List
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
                <BiCommentDots className={({ isActive }) => {
                return isActive ? "dashboard-active" : "dashboard-default";
              }} /> Review
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
