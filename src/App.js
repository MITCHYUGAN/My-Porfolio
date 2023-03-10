import React from "react";
import Header from "./components/header/Header";
// import LandPage from "./components/landpage/LandPage";
import Project from "./components/Projects/Project";
import LandingPage from "./components/LandingPage/LandingPage";

import './App.css'
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
        <Header />
        <LandingPage />
        <div className="Main">
          <About />
          <Project />
          <Contact />
        </div>
    </div>
  );
}

export default App;
