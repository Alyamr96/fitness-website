import React from "react";
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
import Test from "./components/test/Test";

function App() {
  return (
    <div className="App">
      {/*<Header />
      <Home />
      <About />
      <Features />
      <Reviews />
      <Blog />
      <Banner />
      <Pricing />
  <Footer />*/}
      <Test />
    </div>
  );
}

export default App;
