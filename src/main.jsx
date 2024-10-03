import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalContext from "./components/GlobalContext/GlobalContext";

console.log("mainjsx")

import "./assets/css/main.css";
ReactDOM.createRoot(document.getElementById("root")).render(
 

  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>
);
