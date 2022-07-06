import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";

import "./global.css";
import Routing from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routing>
      <Header />
    </Routing>
  </React.StrictMode>
);
