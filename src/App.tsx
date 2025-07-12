import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import Gol from "./pages/Gol";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 0",
        }}
      >
        <h1 className="site-title">ENRIQUE AUGUSTO</h1>

        <a
          href="https://www.instagram.com/enriqaugusto/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ color: "#f5f5f5", fontSize: "1.8rem" }}
          className="instagram-link"
        >
          <i className="bi bi-instagram"></i>
        </a>

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

      {/* Rotas */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="/gol" element={<Gol />} />
      </Routes>
    </div>
  );
}

export default App;
