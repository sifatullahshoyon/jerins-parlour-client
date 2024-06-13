import React, { useState, useRef, useEffect } from "react";
import logo from "../../../assets/images/logo/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import PrimaryBtn from "../../Button/PrimaryBtn";
import Container from "../Container";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  const location = useLocation();

  const isNavbar = location?.pathname?.includes("/login") || location?.pathname?.includes("/registration");

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  return (
    <div className={`sticky top-0 ${isNavbar ? 'bg-transparent' : 'bg-secondary-color'} w-full`}>
      <Container>
        <nav className="flex  items-center justify-between  px-4 pt-10 pb-2 text-white">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110 pr-5">
            <img src={logo} alt="logo" />
          </div>
          <ul className="hidden items-center justify-between gap-10 md:flex">
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
                to="/contact-us"
                className={({ isActive }) => {
                  return isActive ? "active" : "default";
                }}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <PrimaryBtn props="Login" width="w-[134px]" />
              </NavLink>
            </li>
          </ul>
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              color="#1F1632"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              {" "}
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <ul className=" z-10  gap-2  bg-[#F6F5F2]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return isActive ? "active" : "default";
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return isActive ? "active" : "default";
                    }}
                  >
                    Our Portfolio
                  </NavLink>
                </li>
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                  <NavLink
                    to="/"
                    className={({ isActive }) => {
                      return isActive ? "active" : "default";
                    }}
                  >
                    Our Team
                  </NavLink>
                </li>
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive }) => {
                      return isActive ? "active" : "default";
                    }}
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                  <NavLink to="/login">
                    <PrimaryBtn props="Login" width="w-[134px]" />
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
