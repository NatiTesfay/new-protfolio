import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/features/nav/Navbar.jsx";
import Footer from "./components/features/footer/Footer.jsx";
import Home from "./components/pages/home/Home.jsx";
import Skills from "./components/pages/skills/Skills.jsx";
import MyProjects from "./components/pages/myProjects/MyProjects.jsx";
import Contact from "./components/pages/contact/Contact.jsx";


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Home/>
        <Skills/>
        <MyProjects/>
        <Contact/>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
