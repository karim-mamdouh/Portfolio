//React
import React, { Suspense, lazy } from "react";
//Scss styling file
import "./App.scss";
//Routing
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/Nav-Bar/NavBar";
import Footer from "./components/Footer/Footer";
//Lazy loading
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Resume = lazy(() => import("./pages/Resume/Resume"));

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Suspense
          fallback={
            <div className="loading-msg">
              <h1>Loading...</h1>
            </div>
          }
        >
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Home />} />
            {/* About route */}
            <Route path="/about" element={<About />} />
            {/* Resume route */}
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
