import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = ({ user, setUser }) => {
  return (
    <>
      <div className="site-wrapper">
        <Navbar user={user} setUser={setUser} />
        {/* Outlet = All content inside App/RootLayout */}
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
