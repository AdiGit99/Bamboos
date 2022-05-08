import { Navigate, Outlet, useLocation } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Sidebar from "../components/portal/sidebar/sidebar";
import Topbar from "../components/portal/topbar/topbar";
import "./protectedRoutes.css";

const ProtectedRoutes = ({ user }) => {
  return user ? (
    <div className="protected">
      <Sidebar />
      <div className="container">
        <Topbar />
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
