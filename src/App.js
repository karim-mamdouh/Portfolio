//Scss styling file
import "./App.scss";
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/Nav-Bar/NavBar";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";
import About from "./pages/About/About";

function App() {
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
    </Router>
  );
}

export default App;
