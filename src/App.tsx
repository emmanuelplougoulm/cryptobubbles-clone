import React from "react";
import Home from "./Home/Home";
import About from "./About/About";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <p>crypto forecast</p>
        </header>

        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
