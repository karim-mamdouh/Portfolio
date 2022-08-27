import "./App.scss";
import NavBar from "./components/Nav-Bar/NavBar";
import Home from "./pages/Home/Home";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Resume />
      </main>
    </>
  );
}

export default App;
