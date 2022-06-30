import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { ChevronLeft } from "@material-ui/icons";
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
        <div
          className="authDetails-close-container"
          onClick={() => changeStep(0)}
        >
          <ChevronLeft className="authDetails-close" />
        </div>
        <h3>Finish signing up</h3>
      </div>
      <div className="authDetails-content">
        <form className="form" onSubmit={handleClick}>
          <div className="input-container input-one">
            <input
              type="text"
              required
              id="firstname"
              className="form-input"
              placeholder=""
              onChange={handleChange}
            />
            <span className="floating-label">First name</span>
          </div>
          <div className="input-container input-two">
            <input
              type="text"
              required
              id="lastname"
              className="form-input"
              placeholder=""
              onChange={handleChange}
            />
            <span className="floating-label">Last name</span>
          </div>

          <p className="word-break">
            Make sure it matches the name on your government ID.
          </p>
          <div className="input-container">
            <input
              type="date"
              required
              id="dob"
              className="form-input"
              placeholder=""
              onChange={handleChange}
            />
            {/* <span className="floating-label">Birth date</span> */}
          </div>
          <p className="word-break">
            To sign up, you need to be at least 18. Your birthday won't be
            shared with other people who use Bamboos.
          </p>
          <div className="input-container">
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
          <p className="word-break">
            We'll email you appointment confirmations and receipts
          </p>
          <div className="input-container">
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
          <p className="word-break">
            By selecting Agree and Continue, I agree to Bamboo's Terms of
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
              "Agree and continue"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
