import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { ChevronLeft } from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";
import "./authPassword.scss";

export default function AuthPassword({
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
    <div className="authPassword-container">
      <div className="authPassword-topbar">
        <div
          className="authPassword-close-container"
          onClick={() => changeStep(1)}
        >
          <ChevronLeft className="authPassword-close" />
        </div>
        <h3>Log in or sign up</h3>
      </div>
      <div className="authPassword-content">
        <div className="form">
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
          <button
            className="authPassword-button"
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
          <h4>Forgot password?</h4>
        </div>
      </div>
    </div>
  );
}
