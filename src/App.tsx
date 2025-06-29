import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Info from "./pages/info";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="container">
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 0",
          }}
        >
          {" "}
          <h1 className="site-title">Enrique Augusto</h1>
          {/* Ícone Instagram com link */}
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
          {/* Botão hamburguer só aparece no mobile (CSS controla display) */}
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
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/Info" onClick={() => setMenuOpen(false)}>
                Info
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Menu mobile - sempre no DOM, animação controlada pela classe 'active' */}
        <nav className={`nav-mobile ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/Info" onClick={() => setMenuOpen(false)}>
                Info
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
