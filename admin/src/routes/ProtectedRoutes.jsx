import { Navigate, Outlet } from "react-router-dom";

import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";
import "./protectedRoutes.scss";
import { useEffect } from "react";

export const ProtectedRoutes = ({ admin }) => {
  useEffect(() => {
    console.log(admin);
  });
  return admin ? (
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
    <Navigate to="/" />
  );
};
