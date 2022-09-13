//React
import React, { Suspense, lazy, useState } from "react";
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
  const [themeState, setThemeState] = useState(true); //Flag to hold status of dark/light mode
  //Function to be used by navbar to notify parent that theme has changed
  const updateHeroImage = () => {
    setThemeState((state) => !state);
  };
  return (
    <Router>
      <NavBar updateHero={updateHeroImage} />
      <main>
        <Suspense
          fallback={
            //Message showed on component loading
            <div className="loading-msg">
              <h1>Loading...</h1>
            </div>
          }
        >
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Home isDark={themeState} />} />
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
