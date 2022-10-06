import React from "react";
import AboutImage from "../../../images/ammar-beach.jpg";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src={AboutImage} alt="" />
      </div>

      <div className="content">
        <span>about us</span>
        <h3 className="title">Every day is a chance to become better</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quia
          accusamus dicta inventore nobis obcaecati vero odio, id dolorum.
          Consequatur ex, aperiam deserunt nostrum perferendis illum unde ipsa?
          Consequatur, distinctio?
        </p>
        <div className="box-container">
          <div className="box">
            <h3>
              <i className="fas fa-check"></i>body and mind
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div className="box">
            <h3>
              <i className="fas fa-check"></i>healthy life
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div className="box">
            <h3>
              <i className="fas fa-check"></i>strategies
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
          <div className="box">
            <h3>
              <i className="fas fa-check"></i>workout
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              enim.
            </p>
          </div>
        </div>
        <a href="#" className="btn">
          read more
        </a>
      </div>
    </section>
  );
}
