import React from "react";
import "./Header.css";
import Verified from "../../../images/verified.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-slogan">
        <div className="icon">
          <img src={Verified} alt="verified-icon" className="verified-icon" />
        </div>
        <div className="slogan">
          <span>#AMMARIFIED</span>
        </div>
      </div>

      <div id="menu-btn" className="fas fa-bars"></div>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#features">features</a>
        <a href="#pricing">pricing</a>
        <a href="#blogs">blogs</a>
      </nav>
    </header>
  );
}
