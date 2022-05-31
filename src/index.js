import React from "react";
import ReactDOM from "react-dom";
import App from "./Routes/App.jsx";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
