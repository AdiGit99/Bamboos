import { Navigate, Outlet } from "react-router-dom";

import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";
import "./protectedRoutes.scss";

export const ProtectedRoutes = ({ user }) => {
  return true ? (
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
