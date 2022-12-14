import React, { useState } from "react";
import "./Test.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { sliderData } from "./sliderData";
import Cover from "../cover/Cover";

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

  const myfunction = (index: number) => {
    if (index === 1) {
      const slider: any = sliderData.find((x) => x.index === 1);
      return (
        <div className="flex-container-1">
          <div className="flexbox-item-1"></div>
          <div className="flexbox-item-2">
            <h3>{slider.meet}</h3>
            <span>{slider.content}</span>
          </div>
        </div>
      );
    }
    if (index === 2) {
      const slider: any = sliderData.find((x) => x.index === 2);

      return (
        <div className="flex-container-2">
          <div className="flexbox-item-1"></div>
          <div className="flexbox-item-2">
            <h3>{slider.meet}</h3>
            <span>{slider.content}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="slider">
      {current != 0 && (
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      )}
      {myfunction(current)}
      {current != 2 && (
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      )}
    </div>
  );
}
