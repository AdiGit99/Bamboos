import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { Close } from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./authform.scss";

export default function AuthForm({ handleChange, toggleAuth, nextStep }) {
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setPhone((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "CHECK_PHONE" });
  //   try {
  //     const res = await axios.post("/auth/phone", phone);
  //     dispatch({ type: "PHONE_SUCCESS", payload: res.data.details });
  //     navigate("/");
  //   } catch (err) {
  //     dispatch({ type: "PHONE_FAILURE", payload: err.response.data });
  //   }
  // };

  return (
    <div className="auth-container">
      <div className="auth-topbar">
        <div className="auth-close-container" onClick={toggleAuth}>
          <Close className="auth-close" />
        </div>
        <h3>Log in or sign up</h3>
      </div>
      <div className="auth-content">
        <h2>Welcome to Bamboos</h2>
        {/* <form className="form" onSubmit={handleClick}> */}
        <div className="form" onClick={nextStep}>
          <div className="form-input-container input-one">
            <h3>Country/Region</h3>
            <h3>Hong Kong (+852)</h3>
          </div>
          <div className="form-input-container input-two">
            <input
              type="phone"
              required
              id="phone"
              className="form-input"
              placeholder="Phone number"
              onChange={handleChange}
            />
          </div>
          <h4>
            We'll call or text you to confirm your number. Standard message and
            data rates apply.
          </h4>
          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Continue"
            )}
          </button>
          {/* </form> */}
        </div>
        <div className="auth-break">
          <hr className="auth-line" />
          <span>or</span>
          <hr className="auth-line" />
        </div>
        <div className="auth2-login-container">
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>
          <h3>Continue with Facebook</h3>
        </div>
        <div className="auth2-login-container">
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </div>
          <h3>Continue with Google</h3>
        </div>
      </div>
    </div>
  );
}
