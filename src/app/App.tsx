import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Features from "./components/features/Features";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Features />
    </div>
  );
}

export default App;
