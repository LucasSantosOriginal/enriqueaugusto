import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/enriqueaugusto">
      <App />
    </BrowserRouter>
  </StrictMode>
);
