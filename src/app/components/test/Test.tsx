import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Test.css";
import Verified from "../../../images/verified.jpg";

export default function Test() {
  return (
    <>
      <div className="icon">
        <img src={Verified} alt="verified-icon" className="verified-icon" />
      </div>
      <div className="slogan">
        <span>#AMMARIFIED</span>
      </div>
    </>
  );
}
