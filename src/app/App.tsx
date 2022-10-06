import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import Banner from "./components/banner/Banner";
import Reviews from "./components/reviews/Reviews";
import Blog from "./components/blogs/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Features />
      <Pricing />
      <Banner />
      <Reviews />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
