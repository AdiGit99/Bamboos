import React, { useState, useCallback } from "react";
import { AuthContext } from "../../../context/AuthContext";

import AuthForm from "../AuthForm/AuthForm";
import AuthDetails from "../AuthDetails/AuthDetails";
import AuthEmail from "../AuthEmail/AuthEmail";
import PhoneVerification from "../PhoneVerification/PhoneVerification";

import "./authModal.scss";

export default function AuthModal({ toggleAuth }) {
  const [credentials, setCredentials] = useState({
    firstname: undefined,
    lastname: undefined,
    dob: undefined,
    phone: "XXX - XXX - XXXX",
    email: undefined,
    password: undefined,
  });

  const [step, setStep] = useState(0);

  const previousStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const changeStep = useCallback((num) => {
    setStep(num);
  }, []);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const stepDisplay = () => {
    switch (step) {
      case 0:
        return (
          <AuthForm
            handleChange={handleChange}
            toggleAuth={toggleAuth}
            changeStep={changeStep}
          />
        );

      case 1:
        return (
          <AuthEmail
            credentials={credentials}
            handleChange={handleChange}
            changeStep={changeStep}
            toggleAuth={toggleAuth}
          />
        );

      case 2:
        //phone verification
        return (
          <PhoneVerification
            credentials={credentials}
            toggleAuth={toggleAuth}
            changeStep={changeStep}
          />
        );

      case 3:
        return (
          <AuthDetails
            credentials={credentials}
            handleChange={handleChange}
            toggleAuth={toggleAuth}
            changeStep={changeStep}
          />
        );
      //Phone verified, find phone in db. If exists, login, else case 2
      //Sign up email, name, socials?, dob then redirect
    }
  };

  return <div className="authmodal-container">{stepDisplay()}</div>;
}
