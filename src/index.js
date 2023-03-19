import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-qibjhpjrvfcm8dst.eu.auth0.com
// c6Z3nFbC9YaA8GggaYfMFQoHSg9NSrLb

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qibjhpjrvfcm8dst.eu.auth0.com"
      clientId="c6Z3nFbC9YaA8GggaYfMFQoHSg9NSrLb"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

serviceWorker.unregister();
