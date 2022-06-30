import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { Close, Email } from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./authform.scss";

export default function AuthForm({ handleChange, toggleAuth, changeStep }) {
  const loading = false;

  const states = [
    ["CA1", "Canada (+1)"],
    ["HK852", "Hong Kong (+852)"],
    ["US1", "United States (+1)"],
  ];

  const navigate = useNavigate();

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
        <div className="form">
          <div className="select-container input-one">
            <div className="select-container-label">Country/Region</div>
            <div className="countrycode-container">
              <select className="login-signup-countrycode">
                {states.map(([value, name]) => (
                  <option key={value} value={value}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-two">
            <input
              type="phone"
              required
              id="phone"
              className="form-input"
              placeholder=""
              onChange={handleChange}
            />
            <span className="floating-label">Phone number</span>
          </div>
          <h4>
            We'll call or text you to confirm your number. Standard message and
            data rates apply.
          </h4>
          <button
            className="auth-button"
            type="submit"
            disabled={loading}
            onClick={() => changeStep(4)}
          >
            {loading ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Continue"
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
        <div className="auth2-login-container" onClick={() => changeStep(1)}>
          <div className="auth2-logo-container">
            <FontAwesomeIcon icon={faEnvelope} className="auth2-icon" />
          </div>
          <h3>Continue with Email</h3>
        </div>
      </div>
    </div>
  );
}
