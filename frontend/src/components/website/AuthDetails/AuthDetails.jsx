import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { Close } from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";
import "./authDetails.scss";

export default function AuthForm({
  credentials,
  handleChange,
  toggleAuth,
  changeStep,
}) {
  const { loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    const user = {
      email: credentials.email,
      password: credentials.password,
      firstname: credentials.firstname,
      lastname: credentials.lastname,
      dob: credentials.dob,
      phone: credentials.phone,
    };

    console.log(user);
    try {
      await axios.post("/auth/register", user);
      changeStep(1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="authDetails-container">
      <div className="authDetails-topbar">
        <div className="authDetails-close-container" onClick={toggleAuth}>
          <Close className="authDetails-close" />
        </div>
        <h3>Sign up with Facebook or Google</h3>
      </div>
      <div className="authDetails-break">
        <hr className="authDetails-line" />
        <span>or</span>
        <hr className="authDetails-line" />
      </div>
      <div className="authDetails-content">
        <form className="form" onSubmit={handleClick}>
          <div className="form-input-container">
            <input
              type="text"
              id="email"
              required
              className="text-input"
              placeholder="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-container">
            <input
              type="text"
              id="firstname"
              required
              className="text-input"
              placeholder="First name"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-container">
            <input
              type="text"
              id="lastname"
              required
              className="text-input"
              placeholder="Last name"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-container">
            <input
              type="text"
              id="password"
              required
              className="text-input"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <h2>Birthday</h2>
          <div className="form-input-container">
            <input
              type="date"
              id="dob"
              required
              className="text-input"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <p>
            By click Sign up or Continue with, I agree to Bamboo's Terms of
            Service, Payments Terms of Service, Privacy Policy, and
            Nondiscrmination Policy.
          </p>
          <button
            className="authDetails-button"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Sign up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
