import React from "react";
import "./Blog.css";
import Blog1 from "../../../images/blog-1.jpg";

export default function Blog() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        <span>posts</span>{" "}
      </h1>
      <div className="swiper-wrapper">
        <div className="swiper-slide slide">
          <div className="image">
            <img src={Blog1} alt="" />
          </div>
          <div className="content">
            <div className="link">
              {" "}
              <a href="#">by user</a> <span>|</span>{" "}
              <a href="#">21st may, 2021</a>{" "}
            </div>
            <h3>fitness is not about being better than someone else</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              tenetur?
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
