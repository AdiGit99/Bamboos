import React, { useContext, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import bamlogo from "../../../assets/bam.png";
import hero from "../../../assets/login-graphic.png";
import "./login.scss";

import { loginCall } from "../../../apiCalls";
import { AuthContext } from "../../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
                <NavLink to="/signup" className="register-button-text-login">
                  SIGN UP
                </NavLink>
              </div>
            </div>
            <h1 className="title-login">Welcome Back</h1>
            <h3 className="subtitle-login">Login to your account</h3>
            <div className="login-form">
              <form className="login-box" onSubmit={handleClick}>
                <span>Username</span>
                <input
                  type="email"
                  id="login-email"
                  required
                  className="text-input"
                  placeholder="Email"
                  ref={email}
                />
                <span>Password</span>
                <input
                  type="password"
                  required
                  id="login-password"
                  minLength="6"
                  className="text-input"
                  placeholder="Password"
                  ref={password}
                />
                <div className="login-need-help">
                  <a className="forgot-password-link" href="/home">
                    Forgot your password?
                  </a>
                </div>
                <button
                  className="login-button"
                  type="submit"
                  disabled={isFetching}
                >
                  {isFetching ? (
                    <CircularProgress color="white" size="20px" />
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="temp">
        <hr className="separator" />
      </div>
      <div className="footer-login">
        <div className="footer-container-login">
          <div className="footer-content-login">
            <ul className="footer-column-login">
              <li className="footer-title-login">Bamboos</li>
              <li>Install</li>
              <li>Mobile</li>
              <li>Rates</li>
              <li>Institutions</li>
              <li>Features</li>
              <li>Enterprise</li>
            </ul>
            <ul className="footer-column-login">
              <li className="footer-title-login">About us</li>
              <li>About</li>
              <li>News</li>
              <li>Jobs</li>
              <li>Bamboos Blog</li>
            </ul>
            <ul className="footer-column-login">
              <li className="footer-title-login">Support</li>
              <li>Help Center</li>
              <li>Contact us</li>
              <li>Copyright</li>
              <li>Cookies</li>
              <li>Privacy &amp; Terms</li>
              <li>Sitemap</li>
            </ul>
            <ul className="footer-column-login">
              <li className="footer-title-login">Community</li>
              <li>Referrals</li>
              <li>Forum</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="languageLogin">
            <div className="language-container-login" />
          </div>
        </div>
      </div>
    </div>
  );
}
