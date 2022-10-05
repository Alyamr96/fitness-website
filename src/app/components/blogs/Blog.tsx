import React from "react";
import "./Blog.css";
import Blog1 from "../../../images/blog-1.jpg";
import Blog2 from "../../../images/blog-2.jpg";
import Blog3 from "../../../images/blog-3.jpg";
import Blog4 from "../../../images/blog-4.jpg";
import Blog5 from "../../../images/blog-5.jpg";

export default function Blog() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        <span>daily posts</span>{" "}
      </h1>
      <div className="swiper blogs-slider">
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, tenetur?
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="swiper-slide slide">
            <div className="image">
              <img src={Blog2} alt="" />
            </div>
            <div className="content">
              <div className="link">
                {" "}
                <a href="#">by user</a> <span>|</span>{" "}
                <a href="#">21st may, 2021</a>{" "}
              </div>
              <h3>fitness is not about being better than someone else</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, tenetur?
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="swiper-slide slide">
            <div className="image">
              <img src={Blog3} alt="" />
            </div>
            <div className="content">
              <div className="link">
                {" "}
                <a href="#">by user</a> <span>|</span>{" "}
                <a href="#">21st may, 2021</a>{" "}
              </div>
              <h3>fitness is not about being better than someone else</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, tenetur?
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="swiper-slide slide">
            <div className="image">
              <img src={Blog4} alt="" />
            </div>
            <div className="content">
              <div className="link">
                {" "}
                <a href="#">by user</a> <span>|</span>{" "}
                <a href="#">21st may, 2021</a>{" "}
              </div>
              <h3>fitness is not about being better than someone else</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, tenetur?
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
          <div className="swiper-slide slide">
            <div className="image">
              <img src={Blog5} alt="" />
            </div>
            <div className="content">
              <div className="link">
                {" "}
                <a href="#">by user</a> <span>|</span>{" "}
                <a href="#">21st may, 2021</a>{" "}
              </div>
              <h3>fitness is not about being better than someone else</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam, tenetur?
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </section>
  );
}
