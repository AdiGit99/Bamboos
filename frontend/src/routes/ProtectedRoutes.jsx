import { Navigate, Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/providers/sidebar/sidebar";
import Topbar from "../components/providers/topbar/topbar";
import TopNav from "../components/members/topbar/topbar";
import "./protectedRoutes.scss";

export const ProtectedRoutesGeneral = ({ user }) => {
  return user ? (
    <div className="protected-general">
      <TopNav />
      <div classname="protected-general-container">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export const ProtectedRoutesProvider = ({ user }) => {
  return user ? (
    <div className="protected-provider">
      <Sidebar />
      <div className="protected-provider-container">
        <Topbar />
        <div className="protected-provider-content-container">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
