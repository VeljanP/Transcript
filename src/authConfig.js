// src/authConfig.js

export const msalConfig = {
    auth: {
        clientId: "150790d9-92e1-4021-b700-56d7c6124f3d", // Application (client) ID from Azure AD B2C
        authority: "https://semadm.onmicrosoft.com/B2C_1_Name",
        redirectUri: "http://localhost:3000", // Redirect URI set in the app registration
    },
    cache: {
      cacheLocation: "localStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set to true for IE 11 or Edge
    },
};

export const loginRequest = {
    scopes: ["openid", "profile"], // Scopes for the ID token
};
