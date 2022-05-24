import React, { useRef, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Person, NotificationsNone, Language } from "@material-ui/icons";
import { AuthContext } from "../../../context/AuthContext";
import bamlogo from "../../../assets/bam.png";

import "./topbarGeneral.scss";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

export default function TopbarGeneral() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="topbarGeneralWrapper">
      <Link className="logo-container" to="/">
        <img src={bamlogo} alt="Bamboos Logo" />
      </Link>
      <div className="nav-options">
        <NavLink
          className={({ isActive }) =>
            `option ${isActive ? "active-bottom" : ""}`
          }
          to="/nurse"
        >
          Today
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `option ${isActive ? "active-bottom" : ""}`
          }
          to="/messages"
        >
          Messages
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `option ${isActive ? "active-bottom" : ""}`
          }
          to="/nurse"
        >
          Something
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `option ${isActive ? "active-bottom" : ""}`
          }
          to="/nurse"
        >
          Something
        </NavLink>
      </div>
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <Person className="topAvatar" />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <Link to="/">Main page</Link>
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
    </div>
  );
}
