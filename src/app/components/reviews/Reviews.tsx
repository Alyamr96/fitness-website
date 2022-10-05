import React from "react";
import "./Reviews.css";
import Pic1 from "../../../images/pic-1.png";
import Pic2 from "../../../images/pic-2.png";
import Pic3 from "../../../images/pic-3.png";
import Pic4 from "../../../images/pic-4.png";

export default function Reviews() {
  return (
    <section className="review">
      <div className="information">
        <span>testimonials</span>
        <h3>what our clients says</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptas praesentium asperiores fugiat, excepturi odit obcaecati a
          voluptatibus earum quisquam?
        </p>
        <a href="#" className="btn">
          read more
        </a>
      </div>
      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, quo.
            </p>
            <div className="user">
              <img src={Pic1} alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>designer</span>
              </div>
              <i className="fas fa-quote-left" />
            </div>
          </div>
          <div className="swiper-slide slide">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, quo.
            </p>
            <div className="user">
              <img src={Pic2} alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>designer</span>
              </div>
              <i className="fas fa-quote-left" />
            </div>
          </div>
          <div className="swiper-slide slide">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, quo.
            </p>
            <div className="user">
              <img src={Pic3} alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>designer</span>
              </div>
              <i className="fas fa-quote-left" />
            </div>
          </div>
          <div className="swiper-slide slide">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, quo.
            </p>
            <div className="user">
              <img src={Pic4} alt="" />
              <div className="info">
                <h3>john deo</h3>
                <span>designer</span>
              </div>
              <i className="fas fa-quote-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
