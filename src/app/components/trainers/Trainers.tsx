import React from "react";
import "./Trainers.css";
import Trainer1 from "../../../images/trainer-1.jpg";
import Trainer2 from "../../../images/trainer-2.jpg";
import Trainer3 from "../../../images/trainer-3.jpg";
import Trainer4 from "../../../images/trainer-4.jpg";

export default function Trainers() {
  return (
    <section className="trainers" id="trainers">
      <h1 className="heading">
        {" "}
        <span>expert trainers</span>{" "}
      </h1>
      <div className="box-container">
        <div className="box">
          <img src={Trainer1} alt="" />
          <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <div className="box">
          <img src={Trainer2} alt="" />
          <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <div className="box">
          <img src={Trainer3} alt="" />
          <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <div className="box">
          <img src={Trainer4} alt="" />
          <div className="content">
            <span>expert trainer</span>
            <h3>john deo</h3>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
