import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import Auth from "./Screens/Auth.jsx";
import AuthContext, { AuthContextProvider } from "./state/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </React.StrictMode>,
);
