import React, { Fragment, useState } from "react";
import "./Test1.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { sliderData } from "./sliderData";

export default function Test() {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  if (!Array.isArray(sliderData) || length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <div className="inside-slider">
        {sliderData.map((slider) => {
          return (
            <div
              className={slider.index === current ? "slide active" : "slide"}
              key={slider.index}
            >
              {current === 0 && (
                <div className="flex-container-0 inner">
                  <div className="flexbox-item-1"></div>
                  <div className="flexbox-item-2">
                    <h3>{slider.meet}</h3>
                    <span>{slider.content}</span>
                  </div>
                </div>
              )}
              {current === 1 && (
                <div className="flex-container-1 inner">
                  <div className="flexbox-item-1"></div>
                  <div className="flexbox-item-2">
                    <h3>{slider.meet}</h3>
                    <span>{slider.content}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
}
