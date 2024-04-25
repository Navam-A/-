import React from "react";
import ReactDOM from "react-dom/client";
import "react-router-dom";
import "./index.css";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
