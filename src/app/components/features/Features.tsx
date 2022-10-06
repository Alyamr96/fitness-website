import React from "react";
import FImage1 from "../../../images/ammar-features1.jpg";
import Icon1 from "../../../images/icon-1.png";
import FImage2 from "../../../images/ammar-features2.jpg";
import Icon2 from "../../../images/icon-2.png";
import FImage3 from "../../../images/f-img-3.jpg";
import Icon3 from "../../../images/icon-3.png";
import "./Features.css";

export default function Features() {
  return (
    <section className="features" id="features">
      <h1 className="heading">
        {" "}
        <span>features</span>{" "}
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={FImage1} alt="" />
          </div>
          <div className="content">
            <img src={Icon1} alt="" />
            <h3>body building</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box second">
          <div className="image">
            <img src={FImage2} alt="" />
          </div>
          <div className="content">
            <img src={Icon2} alt="" />
            <h3>workouts and nutrition plans for men</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={FImage3} alt="" />
          </div>
          <div className="content">
            <img src={Icon3} alt="" />
            <h3>workout and nutrition plans for women</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, atque.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
