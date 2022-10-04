import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <div className="content">
              <span>be strong, be fit</span>
              <h3>Make yourself stronger than your excuses.</h3>
              <a href="#" className="btn">
                get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
