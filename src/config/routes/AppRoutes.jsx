//React
import { lazy } from "react";
//Routing
import { Routes, Route } from "react-router-dom";
//Lazy loading
const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Resume = lazy(() => import("../../pages/Resume/Resume"));

const AppRoutes = ({ themeState }) => {
  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<Home isDark={themeState} />} />
      {/* About route */}
      <Route path="/about" element={<About />} />
      {/* Resume route */}
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default AppRoutes;
