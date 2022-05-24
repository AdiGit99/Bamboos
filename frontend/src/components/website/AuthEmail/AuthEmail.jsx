import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { ChevronLeft } from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";
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
    <div className="authDetails-container">
      <div className="authDetails-topbar">
        <div
          className="authDetails-close-container"
          onClick={() => changeStep(0)}
        >
          <ChevronLeft className="authDetails-close" />
        </div>
        <h3>Sign up with Email</h3>
      </div>
      <div className="authDetails-break">
        <hr className="authDetails-line" />
        <span>or</span>
        <hr className="authDetails-line" />
      </div>
      <div className="authDetails-content">
        <form className="form" onSubmit={handleSubmit}>
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
              id="password"
              required
              className="text-input"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button
            className="authDetails-button"
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress color="white" size="20px" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
