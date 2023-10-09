import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./context/menu.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-ue0gul0dom0ptceb.us.auth0.com"
        clientId="mqSHYxqP2BW8f1l02zckDrWoyPVPwtQX"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <MenuProvider>
          <App />
        </MenuProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
