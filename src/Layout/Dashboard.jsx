import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../pages/Dashboard/DashboardSidebar/DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <DashboardSidebar />
      <div className="col-span-8 md:col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
