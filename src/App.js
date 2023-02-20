import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutersScreen from "./routes/RouterScreen.jsx";
import Navbar from "./components/features/nav/Navbar.jsx";
import Footer from "./components/features/footer/Footer.jsx";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <RoutersScreen />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
