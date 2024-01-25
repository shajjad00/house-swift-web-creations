import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRoute from "./Route/MyRoute.tsx";
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from "./Providers/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={MyRoute}></RouterProvider>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
