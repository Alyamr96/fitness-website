import React from "react";
import "./Cover.css";
import Verified from "../../../images/verified.jpg";

export default function Cover() {
  return (
    <section className="home" id="home">
      <div className="slide">
        <div className="content">
          <div className="logo-slogan">
            <div className="icon">
              <img
                src={Verified}
                alt="verified-icon"
                className="verified-icon"
              />
            </div>
            <div className="slogan">
              <span>#AMMARIFIED</span>
            </div>
            <div className="slogan-content">
              <span>DARE, TO TRANSFORM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
