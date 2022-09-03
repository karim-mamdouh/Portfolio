//React
import React from "react";
//Scss styling file
import "./App.scss";
//Routing
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/Nav-Bar/NavBar";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          {/* About route */}
          <Route path="/about" element={<About />} />
          {/* Resume route */}
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
