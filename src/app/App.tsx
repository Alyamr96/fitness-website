import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import Trainers from "./components/trainers/Trainers";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Features />
      <Pricing />
      <Trainers />
    </div>
  );
}

export default App;
