// src/Authentication.js

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

export function Authentication() {
    const { instance } = useMsal();

        const handleLogin = () => {
            instance.loginPopup(loginRequest)
            .then(response => {
            console.log("Logged in:", response);
        })
        .catch(error => {
            console.error("Login error:", error);
        });
    };

    const handleLogout = () => {
        instance.logout();
    };

    return (
        <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
