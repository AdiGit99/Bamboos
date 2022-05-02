import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";

import Home from "./pages/website/HomePage/home";
import Nurse from "./pages/website/NursePage/nurse";
import Client from "./pages/website/ClientPage/client";
import Rates from "./pages/website/RatesPage/rates";
import Login from "./pages/website/AuthPages/login";
import Register from "./pages/website/AuthPages/register";
import Logout from "./pages/website/AuthPages/logout";
import Error from "./pages/website/ErrorPage/error";

import About from "./pages/website/AboutPage/about";
import Investors from "./pages/website/InvestorsPage/investors";
import Careers from "./pages/website/CareersPage/careers";
import Contact from "./pages/website/ContactPage/contact";
import Wip from "./pages/website/WIPPage/wip";

import Dashboard from "./pages/portal/DashboardPage/dashboard";
import Calendar from "./pages/portal/SchedulePage/schedule";
import Payment from "./pages/portal/PaymentPage/payment";
import Account from "./pages/portal/AccountPage/account";
import Folder from "./pages/portal/FolderPage/folder";
import Settings from "./pages/portal/SettingsPage/settings";
import Messenger from "./pages/portal/MessengerPage/messenger";

import { AuthContext } from "./context/AuthContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { WithNav, WithoutNav } from "./routes/layout";

import "./App.css";

function App() {
  // const [user, setUser] = useState(true);

  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route element={<WithNav user={user} />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/nurse" element={<Nurse />} />
          <Route path="/client" element={<Client />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/about" element={<About />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<WithoutNav />}>
          <Route path="/wip" element={<Wip />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/schedule" element={<Calendar />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/folder" element={<Folder />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
