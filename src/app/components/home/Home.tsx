import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="slide">
        <div className="content">
          <span>look better, be stronger</span>
          <h3>join the team and change your life</h3>
          <a href="#pricing" className="btn">
            get started
          </a>
        </div>
      </div>
    </section>
  );
}
