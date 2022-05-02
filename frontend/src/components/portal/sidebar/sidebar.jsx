import "./sidebar.css";
import {
  Dashboard,
  Person,
  Today,
  ChatBubbleOutline,
  CreditCard,
  FolderOpen,
  Settings,
} from "@material-ui/icons";

import bamlogo from "../../../assets/bamPurple.png";

import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <Link className="logo-container-dashboard" to="/dashboard">
            <img className="bamlogo" src={bamlogo} alt="Bamboos Logo" />
          </Link>
          <ul className="sidebarList">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "active-side" : "inactive"
              }
            >
              <li className="sidebarListItem">
                <Dashboard className="sidebarIcon" style={{ fill: "white" }} />
              </li>
            </NavLink>
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? "active-side" : "inactive"
              }
            >
              <li className="sidebarListItem">
                <Person className="sidebarIcon" style={{ fill: "white" }} />
              </li>
            </NavLink>
            <NavLink
              to="/schedule"
              className={({ isActive }) =>
                isActive ? "active-side" : "inactive"
              }
            >
              <li className="sidebarListItem">
                <Today className="sidebarIcon" style={{ fill: "white" }} />
              </li>
            </NavLink>
            <NavLink
              to="/messenger"
              className={({ isActive }) =>
                isActive ? "active-side" : "inactive"
              }
            >
              <li className="sidebarListItem">
                <ChatBubbleOutline
                  className="sidebarIcon"
                  style={{ fill: "white" }}
                />
              </li>
            </NavLink>
            <NavLink
              to="/payment"
              className={({ isActive }) =>
                isActive ? "active-side" : "inactive"
              }
            >
              <li className="sidebarListItem">
                <CreditCard className="sidebarIcon" style={{ fill: "white" }} />
              </li>
            </NavLink>
            <NavLink
              to="/folder"
              className={({ isActive }) =>
                isActive ? "active-side" : "inactive"
              }
            >
              <li className="sidebarListItem">
                <FolderOpen className="sidebarIcon" style={{ fill: "white" }} />
              </li>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? "active-side" : "inactive"
              }
            >
              <li className="sidebarListItem">
                <Settings className="sidebarIcon" style={{ fill: "white" }} />
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
