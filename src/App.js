import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Automata from "./pages/Automata";
import Regex from "./pages/Regex";
import Turing from "./pages/Turing";
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/automata" className="nav-link">
          Automata
        </Link>
        <Link to="/regex" className="nav-link">
          Regex
        </Link>
        <Link to="/turing" className="nav-link">
          Turing Machine
        </Link>
      </nav>

      {/* Main Content */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/automata" element={<Automata />} />
          <Route path="/regex" element={<Regex />} />
          <Route path="/turing" element={<Turing />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 Automata & Language Visualizer. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;