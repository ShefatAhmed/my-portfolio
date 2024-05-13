import React from "react";

const DashboardHome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://i.postimg.cc/hPgsqWzV/IMG-20240408-132415-275-1491198965-removebg-preview.png"
        alt="Dashboard Logo"
        className="w-40 md:w-64 mb-6 shadow-lg rounded-lg"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Welcome to Shefat Ahmed's Dashboard
      </h1>
      <p className="text-gray-600 text-center">
        Explore our dashboard and manage tasks efficiently.
      </p>
    </div>
  );
};

export default DashboardHome;
