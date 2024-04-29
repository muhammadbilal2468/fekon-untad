import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
