import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// setup de l'application en react, important les modules necassaires, affichant le component app et le style css
// inject tout dans le root html
// react strict mode permet de montrer tout les erreurs de l'application
