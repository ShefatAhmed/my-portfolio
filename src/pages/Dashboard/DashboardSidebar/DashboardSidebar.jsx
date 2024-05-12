import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const DashboardSidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const userLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="col-span-4 md:col-span-2 h-screen sticky left-0 top-0 overflow-auto p-4 lg:p-5 flex flex-col justify-between shadow-2xl">
      <nav className="flex flex-col gap-5">
        <NavLink to="/dashboard">
          <span className="truncate text-2xl font-extrabold">Dashboard</span>
        </NavLink>
        <NavLink to="/dashboard/blogs">
          <span className="truncate lg:px-8">Blogs</span>
        </NavLink>
        <NavLink to="/dashboard/projects">
          <span className="truncate lg:px-8">Projects</span>
        </NavLink>
      </nav>
      <div className="bottom-0">
        <Link
          onClick={userLogout}
          className="btn md:me-3 glass lg:flex px-8 bg-slate-100 mb-5"
        >
          Log Out
        </Link>
        <NavLink to="/" className="flex justify-center items-center gap-2">
          <i className="fa-solid fa-house"></i> Home
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardSidebar;
