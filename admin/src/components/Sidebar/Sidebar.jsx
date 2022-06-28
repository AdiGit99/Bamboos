import "./sidebar.scss";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TodayIcon from "@mui/icons-material/Today";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SettingsIcon from "@mui/icons-material/Settings";

import { DarkModeContext } from "../../context/DarkModeContext";
import bamlogo from "../../assets/bamPurple.png";

export default function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Link className="logo-container-dashboard" to="/dashboard">
          <img className="bamlogo" src={bamlogo} alt="Bamboos Logo" />
        </Link>
        <ul>
          <p className="title">MAIN</p>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <DashboardIcon className="icon" />
              <h3>Dashboard</h3>
            </li>
          </NavLink>
          <p className="title">LISTS</p>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <PersonOutlineIcon className="icon" />
              <h3>Users</h3>
            </li>
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <StoreIcon className="icon" />
              <h3>Products</h3>
            </li>
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <CreditCardIcon className="icon" />
              <h3>Orders</h3>
            </li>
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <LocalShippingIcon className="icon" />
              <h3>Jobs</h3>
            </li>
          </NavLink>
          <p className="title">USEFUL</p>

          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <TodayIcon className="icon" />
              <h3>Calendar</h3>
            </li>
          </NavLink>

          <NavLink
            to="/messenger"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <ChatBubbleOutlineIcon className="icon" />
              <h3>Messages</h3>
            </li>
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <InsertChartIcon className="icon" />
              <h3>Stats</h3>
            </li>
          </NavLink>

          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <NotificationsNoneIcon className="icon" />
              <h3>Notifications</h3>
            </li>
          </NavLink>
          <p className="title">SERVICE</p>

          <NavLink
            to="/system"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <h3>System Health</h3>
            </li>
          </NavLink>

          <NavLink
            to="/logs"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <h3>Logs</h3>
            </li>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebarIcon-container ${isActive ? "active-side" : ""}`
            }
          >
            <li>
              <SettingsIcon className="icon" />
              <h3>Settings</h3>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
