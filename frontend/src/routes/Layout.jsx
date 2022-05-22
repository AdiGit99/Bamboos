import React, { useState, useEffect } from "react";
import Navbar from "../components/website/Navbar/navbar";
import Footer from "../components/website/Footer/footer";
import { Navigate, Outlet } from "react-router-dom";
import AuthForm from "../components/website/AuthForm/AuthForm";

import "./layout.scss";
import AuthModal from "../components/website/AuthModal/AuthModal";

export const WithNav = ({ user }) => {
  const [authActive, setAuthActive] = useState(false);

  const toggleAuth = () => setAuthActive(!authActive);

  useEffect(() => {
    if (authActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [authActive]);

  return (
    <>
      {authActive && (
        <div className="auth-wrapper">
          <div className="overlay" />
          <AuthModal toggleAuth={toggleAuth} />
        </div>
      )}
      <Navbar user={user} toggleAuth={toggleAuth} />
      <div className="overflow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export const WithoutNav = ({ user }) => {
  return user ? (
    <Navigate to="/" />
  ) : (
    <div className="overflow">
      <Outlet />
    </div>
  );
};
