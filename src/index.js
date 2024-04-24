import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AppRoute } from "./router/AppRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TooltipProvider>
      <RouterProvider router={AppRoute} />
    </TooltipProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
