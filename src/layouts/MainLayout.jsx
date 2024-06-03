import React from "react";
import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
// import Navbar2 from "../components/Shared/Navbar2";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar2 /> */}
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
