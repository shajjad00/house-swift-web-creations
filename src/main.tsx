import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRoute from "./Route/MyRoute.tsx";
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={MyRoute}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);
