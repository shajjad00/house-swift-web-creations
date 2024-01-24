import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRoute from "./Route/MyRoute.tsx";
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <AnimatePresence>
        <RouterProvider router={MyRoute}></RouterProvider>
      </AnimatePresence>
    </HelmetProvider>
  </React.StrictMode>
);
