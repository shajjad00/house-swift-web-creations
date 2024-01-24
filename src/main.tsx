import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRoute from "./Route/MyRoute.tsx";
import { HelmetProvider } from "react-helmet-async";
import Provider from "./AuthProvider/Provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <HelmetProvider>
        <RouterProvider router={MyRoute}></RouterProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
