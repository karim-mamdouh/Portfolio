//React
import React, { Suspense, useState } from "react";
import { HashRouter as Router } from "react-router-dom";
//Scss styling file
import "./App.scss";
//Components
import NavBar from "./shared/components/NavBar/NavBar";
import Footer from "./shared/components/Footer/Footer";
import AppRoutes from "./config/routes/AppRoutes";

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
          <AppRoutes themeState={themeState} />
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
