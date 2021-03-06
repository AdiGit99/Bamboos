import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";

//website
import Home from "./pages/website/HomePage/Home";
import Nurse from "./pages/website/NursePage/Nurse";
import Client from "./pages/website/ClientPage/Client";
import Rates from "./pages/website/RatesPage/Rates";
import Error from "./pages/website/ErrorPage/Error";
import About from "./pages/website/AboutPage/About";
import Investors from "./pages/website/InvestorsPage/Investors";
import Careers from "./pages/website/CareersPage/Careers";
import Contact from "./pages/website/ContactPage/Contact";
import Wip from "./pages/website/WIPPage/Wip";

//members
import Messages from "./pages/members/MessagesPage/Messages";

//client
import Register from "./pages/website/AuthPages/Register";
import RegisterOne from "./pages/website/RegisterPages/RegisterOne";
import RegisterTwo from "./pages/website/RegisterPages/RegisterTwo";
import RegisterThree from "./pages/website/RegisterPages/RegisterThree";

import { AuthContext } from "./context/AuthContext";
import {
  ProtectedRoutesGeneral,
  ProtectedRoutesProvider,
} from "./routes/ProtectedRoutes";
import { WithNav, WithoutNav } from "./routes/Layout";

import "./App.css";

function App() {
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
        <Route element={<WithoutNav user={user} />}>
          <Route element={<Register />}>
            <Route path="/registerOne" element={<RegisterOne />} />
            <Route path="/registerTwo" element={<RegisterTwo />} />
            <Route path="/registerThree" element={<RegisterThree />} />
          </Route>
          <Route element={<ProtectedRoutesGeneral user={user} />}>
            {/* <Route path="/looking" element={<Search />} /> */}
            {/* <Route path="/confirm" element={<Summary />} />
            <Route path="/history" element={<History />} /> */}
            <Route path="/messages" element={<Messages />} />
          </Route>
          <Route element={<ProtectedRoutesProvider user={user} />}></Route>
          <Route path="/wip" element={<Wip />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
