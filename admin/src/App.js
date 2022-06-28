import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/LoginPage/Login";
import Dashboard from "./pages/DashboardPage/Dashboard";
import Calendar from "./pages/SchedulePage/Schedule";
import Payment from "./pages/PaymentPage/Payment";
import Account from "./pages/AccountPage/Account";
import Folder from "./pages/FolderPage/Folder";
import Settings from "./pages/SettingsPage/Settings";
import Messenger from "./pages/MessengerPage/Messenger";
import Wip from "./pages/WIPPage/Wip";
import Error from "./pages/ErrorPage/Error";

import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { AuthContext } from "./context/AuthContext";
import "./App.css";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/schedule" element={<Calendar />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/folder" element={<Folder />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/wip" element={<Wip />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
