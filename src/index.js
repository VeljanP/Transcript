// src/index.js

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18+
import App from "./App";
import { msalConfig } from "./authConfig"; // Ensure this path is correct

const msalInstance = new PublicClientApplication(msalConfig);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // For React 18+

root.render(
  <MsalProvider instance={msalInstance}>
    <App />
  </MsalProvider>
);
