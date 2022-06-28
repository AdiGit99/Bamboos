import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { Close, Email } from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import "./authEmail.scss";

export default function AuthEmail({
  credentials,
  handleChange,
  changeStep,
  toggleAuth,
}) {
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: credentials.email,
      password: credentials.password,
    };
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", user);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      toggleAuth(false);
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="authEmail-container">
      <div className="authEmail-topbar">
        <div className="authEmail-close-container" onClick={toggleAuth}>
          <Close className="authEmail-close" />
        </div>
        <h3>Log in or sign up</h3>
      </div>
      <div className="authEmail-content">
        <h2>Welcome to Bamboos</h2>
        <div className="form">
          <div className="input-container input-one">
            <input
              type="email"
              required
              id="email"
              className="form-input"
              placeholder=""
              onChange={handleChange}
            />
            <span className="floating-label">Email</span>
          </div>
          <div className="input-container input-two">
            <input
              type="password"
              required
              id="password"
              className="form-input"
              placeholder=""
              onChange={handleChange}
            />
            <span className="floating-label">Password</span>
          </div>
          <h4>
            We'll call or text you to confirm your number. Standard message and
            data rates apply.
          </h4>
          <button
            className="authEmail-button"
            type="submit"
            disabled={loading}
            onClick={() => changeStep(2)}
          >
            {loading ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Login or Signup"
            )}
          </button>
        </div>
        <div className="auth-break">
          <hr className="auth-line" />
          <span>or</span>
          <hr className="auth-line" />
        </div>
        <div className="auth2-login-container">
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faFacebook} className="auth2-icon" />
          </div>
          <h3>Continue with Facebook</h3>
        </div>
        <div className="auth2-login-container">
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faGoogle} className="auth2-icon" />
          </div>
          <h3>Continue with Google</h3>
        </div>
        <div className="auth2-login-container" onClick={() => changeStep(0)}>
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faMobileScreen} className="auth2-icon" />
          </div>
          <h3>Continue with Phone</h3>
        </div>
      </div>
    </div>
  );
}
