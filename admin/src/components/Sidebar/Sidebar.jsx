import "./sidebar.scss";
import {
  Dashboard,
  Person,
  Today,
  ChatBubbleOutline,
  CreditCard,
  FolderOpen,
  Settings,
} from "@material-ui/icons";

import bamlogo from "../../assets/bamPurple.png";

import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Link className="logo-container-dashboard" to="/dashboard">
          <img className="bamlogo" src={bamlogo} alt="Bamboos Logo" />
        </Link>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `sidebarIcon-container ${isActive ? "active-side" : ""}`
          }
        >
          <Dashboard className="sidebarIcon" style={{ fill: "white" }} />
          <h3>Dashboard</h3>
        </NavLink>
        <NavLink
          to="/account"
          className={({ isActive }) =>
            `sidebarIcon-container ${isActive ? "active-side" : ""}`
          }
        >
          <Person className="sidebarIcon" style={{ fill: "white" }} />
          <h3>Profile</h3>
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `sidebarIcon-container ${isActive ? "active-side" : ""}`
          }
        >
          <Today className="sidebarIcon" style={{ fill: "white" }} />
          <h3>Schedule</h3>
        </NavLink>
        <NavLink
          to="/messenger"
          className={({ isActive }) =>
            `sidebarIcon-container ${isActive ? "active-side" : ""}`
          }
        >
          <ChatBubbleOutline
            className="sidebarIcon"
            style={{ fill: "white" }}
          />
          <h3>Messages</h3>
        </NavLink>
        <NavLink
          to="/payment"
          className={({ isActive }) =>
            `sidebarIcon-container ${isActive ? "active-side" : ""}`
          }
        >
          <CreditCard className="sidebarIcon" style={{ fill: "white" }} />
          <h3>Payment</h3>
        </NavLink>
        <NavLink
          to="/folder"
          className={({ isActive }) =>
            `sidebarIcon-container ${isActive ? "active-side" : ""}`
          }
        >
          <FolderOpen className="sidebarIcon" style={{ fill: "white" }} />
          <h3>Resources</h3>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebarIcon-container ${isActive ? "active-side" : ""}`
          }
        >
          <Settings className="sidebarIcon" style={{ fill: "white" }} />
          <h3>Settings</h3>
        </NavLink>
      </div>
    </div>
  );
}
