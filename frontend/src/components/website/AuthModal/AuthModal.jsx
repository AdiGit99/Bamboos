import React, { useState } from "react";
import { AuthContext } from "../../../context/AuthContext";

import AuthForm from "../AuthForm/AuthForm";
import AuthDetails from "../AuthDetails/AuthDetails";
import PhoneVerification from "../PhoneVerification/PhoneVerification";

import "./authModal.scss";

export default function AuthModal({ toggleAuth }) {
  const [credentials, setCredentials] = useState({
    first: undefined,
    last: undefined,
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

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const stepDisplay = () => {
    switch (step) {
      case 0:
        return (
          // <AuthForm
          //   handleChange={handleChange}
          //   toggleAuth={toggleAuth}
          //   nextStep={nextStep}
          // />
          <AuthDetails
            credentials={credentials}
            handleChange={handleChange}
            toggleAuth={toggleAuth}
          />
        );

      case 1:
        //phone verification
        return (
          <PhoneVerification
            credentials={credentials}
            previousStep={previousStep}
          />
        );

      case 2:
        return <AuthDetails />;
      //Phone verified, find phone in db. If exists, login, else case 2
      //Sign up email, name, socials?, dob then redirect
    }
  };

  return <div className="authmodal-container">{stepDisplay()}</div>;
}
