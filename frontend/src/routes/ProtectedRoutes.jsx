import { Navigate, Outlet, useLocation } from "react-router-dom";

import Topbar from "../components/providers/Topbar/Topbar";
import TopNav from "../components/members/TopbarGeneral/TopbarGeneral";
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
      <Topbar />
      <div className="protected-provider-content-container">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
