import React from "react";
import Navbar from "../components/website/Navbar/navBar";
import Footer from "../components/website/Footer/footer";
import { Outlet } from "react-router-dom";

import "./layout.scss";

export const WithNav = ({ user }) => {
  return (
    <>
      <Navbar user={user} />
      <div className="overflow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export const WithoutNav = () => {
  return (
    <div className="overflow">
      <Outlet />;
    </div>
  );
};
