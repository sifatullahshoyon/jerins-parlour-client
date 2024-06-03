import React, { useState } from "react";
import logo from "../../../assets/images/logo/logo.png";
import { NavLink } from "react-router-dom";
import { HiXMark } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex justify-between items-center w-full">
            {/* logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="logo" />
            </div>
            {/* Nav link */}
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return isActive ? "active" : "default";
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return isActive ? "active" : "default";
                    }}
                  >
                    Our Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return isActive ? "active" : "default";
                    }}
                  >
                    Our Team
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return isActive ? "active" : "default";
                    }}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Button</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <IoMdMenu className="text-xl" />
                ) : (
                  <HiXMark className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Responsive */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#F6F5F2] py-4 w-5/6 mx-auto rounded shadow-sm`}
        id="mobile-menu"
      >
        <ul className="flex flex-col items-center space-x-8 gap-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "default";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "default";
              }}
            >
              Our Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "default";
              }}
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "active" : "default";
              }}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Button</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
