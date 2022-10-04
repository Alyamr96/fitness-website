import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        {" "}
        <span>BE</span>FIT{" "}
      </a>

      <div id="menu-btn" className="fas fa-bars"></div>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#features">features</a>
        <a href="#pricing">pricing</a>
        <a href="#trainers">trainers</a>
        <a href="#blogs">blogs</a>
      </nav>
    </header>
  );
}
