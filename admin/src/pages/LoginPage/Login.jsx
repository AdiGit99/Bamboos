import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import bamlogo from "../../assets/bam.png";
import hero from "../../assets/login-graphic.png";
import "./login.scss";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        console.log(res.data.details);
        navigate("/dashboard");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "Login_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div>
      <div className="header">
        <Link className="logo-container-login" to="/">
          <img className="bamlogo" src={bamlogo} alt="Bamboos Logo" />
        </Link>
      </div>
      <div className="hero">
        <div className="hero-container">
          <div className="img-container">
            <img className="login-graphic" src={hero} alt="login-graphic" />
          </div>
          <div className="login-container">
            <div className="alternative-login">
              <h3>Don't have an account?</h3>
              <div className="register-button-container-login">
                <NavLink
                  to="/registerOne"
                  className="register-button-text-login"
                >
                  SIGN UP
                </NavLink>
              </div>
            </div>
            <h1 className="title-login">Welcome Back</h1>
            <h3 className="subtitle-login">Login to your account</h3>
            {error && <span className="error-message">{error.message}</span>}
            <div className="login-form">
              <form className="login-box" onSubmit={handleClick}>
                <span>Email</span>
                <input
                  type="text"
                  id="email"
                  required
                  className="text-input"
                  placeholder="username"
                  onChange={handleChange}
                />
                <span>Password</span>
                <input
                  type="password"
                  required
                  id="password"
                  minLength="6"
                  className="text-input"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <div className="login-need-help">
                  <a className="forgot-password-link" href="/error">
                    Forgot your password?
                  </a>
                </div>
                <button
                  className="login-button"
                  type="submit"
                  disabled={loading}
                >
                  Login
                </button>
                {error && <span>{error.message}</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
