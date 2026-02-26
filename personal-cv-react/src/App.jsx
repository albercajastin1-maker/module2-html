import { useState, useEffect } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        style={{ margin: "20px", padding: "10px 15px", cursor: "pointer" }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

export default App;