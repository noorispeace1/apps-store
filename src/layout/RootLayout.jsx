import React from "react";
import { Outlet } from "react-router";

import Navbar from "../Components/shared/Navbar"
import { ToastContainer } from "react-toastify";
import Footer from "../Components/shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
