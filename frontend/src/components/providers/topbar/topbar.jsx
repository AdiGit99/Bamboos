import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Person, NotificationsNone, Language } from "@material-ui/icons";
import { AuthContext } from "../../../context/AuthContext";

import "./topbar.scss";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

export default function Topbar() {
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
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="right">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
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
      </div>
    </div>
  );
}
