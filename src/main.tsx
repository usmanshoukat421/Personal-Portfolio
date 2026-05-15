import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <router.Provider />
  </React.StrictMode>
);