import React, { useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PersonIcon from "@mui/icons-material/Person";

import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/AuthContext";

import "./topbar.scss";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const { dispatchDark } = useContext(DarkModeContext);
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
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="right">
          <div className="topbarIconContainer">
            <LanguageOutlinedIcon className="topbarIcon" />
            English
          </div>
          <div className="topbarIconContainer">
            <DarkModeOutlinedIcon
              className="topbarIcon"
              onClick={() => dispatchDark({ type: "TOGGLE" })}
            />
          </div>
          <div className="topbarIconContainer">
            <FullscreenExitOutlinedIcon className="topbarIcon" />
          </div>
          <div className="topbarIconContainer">
            <NotificationsNoneOutlinedIcon className="topbarIcon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <ListOutlinedIcon className="topbarIcon" />
          </div>
          <div className="menu-container">
            <button onClick={onClick} className="menu-trigger">
              <PersonIcon className="topAvatar" />
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
