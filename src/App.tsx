import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import Sminorff from "./pages/sminorff"; // ← arquivo está com letra minúscula
import Beats from "./pages/Beats"; // ← arquivo está com letra minúscula

import Gol from "./pages/Gol";
import Huggies from "./pages/Huggies";
import Motorola from "./pages/Motorola";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <div className="site-header">
          {/* <h1 className="site-title">ENRIQUE AUGUSTO</h1> */}
          {/* <img
            src="/media/esquilo-1.gif"
            alt="Esquilo animado"
            className="site-gif"
          /> */}
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </header>

      {/* Menu desktop */}
      <nav className="nav-desktop">
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Projects" onClick={() => setMenuOpen(false)}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/info" onClick={() => setMenuOpen(false)}>
              INFO
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/enriqaugusto/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="instagram-link"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu mobile */}
      <nav className={`nav-mobile ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Projects" onClick={() => setMenuOpen(false)}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/info" onClick={() => setMenuOpen(false)}>
              INFO
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/enriqaugusto/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="/sminorff" element={<Sminorff />} />
        <Route path="/Beats" element={<Beats />} />

        <Route path="/gol" element={<Gol />} />
        <Route path="/Huggies" element={<Huggies />} />
        <Route path="/Motorola" element={<Motorola />} />
      </Routes>
    </div>
  );
}

export default App;
