import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

// import { AuthContextProvider } from "./context/AuthContext";
import Auth0ProviderWithRedirectCallback from "./auth/authProviderwithRedirect";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
        domain={process.env.PUBLIC_DOMAIN}
        clientId={process.env.PUBLIC_CLIENT_ID}
        audience={process.env.PUBLIC_AUDIENCE}
        scope="read:users"
        redirectUri={typeof window !== "undefined" && window.location.origin}
      >
        <App />
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
