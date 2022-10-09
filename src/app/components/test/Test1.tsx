import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./Test1.css";

export default function Test1() {
  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" />
      <div className="slide">
        <div className="flex-container-0 inner">
          <div className="flexbox-item-1"></div>
          <div className="flexbox-item-2">
            <h3>aly ozzy</h3>
            <span>dedicated</span>
          </div>
        </div>

        <div className="flex-container-1 inner">
          <div className="flexbox-item-1"></div>
          <div className="flexbox-item-2">
            <h3>aly ozzy</h3>
            <span>amazing</span>
          </div>
        </div>
      </div>
      <FaArrowAltCircleRight className="right-arrow" />
    </div>
  );
}
