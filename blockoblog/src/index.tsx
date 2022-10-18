import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const documentRoot = document.getElementById("root");

console.log("Capicua");
if (documentRoot) {
  const root = ReactDOM.createRoot(documentRoot);
  console.log("Capicua");
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
