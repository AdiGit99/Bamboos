import React, { useRef } from "react";

import "./topbar.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

import { Person } from "@material-ui/icons";

import { NotificationsNone, Language } from "@material-ui/icons";

import { Link, NavLink } from "react-router-dom";

export default function Topbar() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

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
                  <Link to="/">Logout</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
