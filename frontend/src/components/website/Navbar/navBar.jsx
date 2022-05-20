import React, { useState, useRef, useEffect, useContext } from "react";
import { ReactComponent as CloseMenu } from "../../../assets/exit.svg";
import { ReactComponent as MenuIcon } from "../../../assets/menu.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";

import bamlogo from "../../../assets/bam.png";
import { Person } from "@material-ui/icons";
import { AuthContext } from "../../../context/AuthContext";

import "./navbar.scss";
import { useDetectOutsideClick } from "../../providers/topbar/useDetectOutsideClick";

function Navbar({ user }) {
  const { dispatch } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();

  const accountRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(accountRef, false);
  const onClick = () => setIsActive(!isActive);

  //drop down menu
  let timeout;
  const dropdownRef = useRef(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open) => {
    setOpenState((openState) => !openState);
    dropdownRef?.current?.click();
  };

  const onHover = (open, action) => {
    // if menu is currently closed open or vise versa
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      clearTimeout(timeout);
      timeout = setTimeout(() => toggleMenu(open), 300);
    }
  };

  const handleDropClick = (open) => {
    setOpenState(!open);
    clearTimeout(timeout);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="navBar">
      <nav className="navBar-container">
        <Link
          className="logo-container"
          to="/"
          onClick={() => setOpenState(false)}
        >
          <img src={bamlogo} alt="Bamboos Logo" />
        </Link>
        <div className={click ? "nav-options burger" : "nav-options"}>
          <div
            className="option-dropdown"
            ref={dropdownRef}
            onMouseEnter={() => onHover(openState, "onMouseEnter")}
            onMouseLeave={() => onHover(openState, "onMouseLeave")}
            onClick={() => handleDropClick(openState)}
          >
            <h1>Company</h1>
            <div
              className={
                openState ? "submenu-container active" : "submenu-container"
              }
            >
              <div className="submenu">
                <NavLink
                  className="submenu-option"
                  onClick={() => setOpenState(false)}
                  to="/about"
                >
                  About us
                </NavLink>
                <NavLink
                  className="submenu-option"
                  onClick={() => setOpenState(false)}
                  to="/rates"
                >
                  Earnings
                </NavLink>
                <NavLink
                  className="submenu-option"
                  onClick={() => setOpenState(false)}
                  to="/careers"
                >
                  Careers
                </NavLink>
                <NavLink
                  className="submenu-option"
                  onClick={() => setOpenState(false)}
                  to="/investors"
                >
                  Investor Relations
                </NavLink>
                <NavLink
                  className="submenu-option"
                  onClick={() => setOpenState(false)}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink
            className="option"
            onClick={() => setOpenState(false)}
            to="/nurse"
          >
            Provider
          </NavLink>
          <NavLink
            className="option"
            onClick={() => setOpenState(false)}
            to="/client"
          >
            Member
          </NavLink>
        </div>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
        <div className="login-nav-option">
          {!user && (
            <div className="login-button-container">
              <NavLink
                className="login-option"
                onClick={closeMobileMenu}
                to="/login"
              >
                Login
              </NavLink>
            </div>
          )}
          {user && (
            <>
              <div className="menu-container">
                <button onClick={onClick} className="menu-trigger">
                  <Person className="topAvatar" />
                </button>
                <nav
                  ref={accountRef}
                  className={`menu ${isActive ? "active" : "inactive"}`}
                >
                  <ul>
                    <li>
                      <Link to="/dashboard">Go to Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/">Switch to customer</Link>
                    </li>
                    <li>
                      <div className="logout-option" onClick={handleLogout}>
                        Logout
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
