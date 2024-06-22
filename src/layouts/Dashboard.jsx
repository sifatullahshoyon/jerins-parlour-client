import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../components/Shared/Drawer/Drawer";

const Dashboard = () => {
  return (
    <div className="flex">
      <Drawer />
      <div className="flex-1 sm:mt-8 lg:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
