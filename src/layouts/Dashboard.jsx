import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../components/Shared/Drawer/Drawer";

const Dashboard = () => {
  return (
    <div className="flex">
      <Drawer />
      <div className="flex-1">
        <Outlet />
      </div>
      {/* <div className="border-black border-2 w-full">
        <p>Lorem ipsum dolor sit amet.</p>
      </div> */}
    </div>
  );
};

export default Dashboard;
