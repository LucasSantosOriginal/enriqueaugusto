import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ⬅️ trocou aqui
import App from "./App.tsx";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      {" "}
      {/* ⬅️ trocou aqui também */}
      <App />
    </HashRouter>
  </StrictMode>
);
