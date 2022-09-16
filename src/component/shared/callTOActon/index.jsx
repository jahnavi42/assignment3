import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import skin from "../../../assest/images/skin2.jpg";
import callIcon from "../../../assest/images/call.png";
import messageIcon from "../../../assest/images/messageIcon.png";
import whatsappIcon from "../../../assest/images/product.jpg";
import { useNavigate } from "react-router-dom";
export default function CallToAction(props) {
  let navigate = useNavigate();
    return (
      <div className="Call-to-action">
        <span className="Call-det1">Thank you and visit again</span>
        <span className="Call-det2">Give Feedback</span>
        <img
          src={callIcon}
          alt=""
          className="Call-det3"
          onClick={() => navigate("/contactus")}
        />
        <img
          src={messageIcon}
          alt=""
          className="Call-det4"
          onClick={() => navigate("/about")}
        />
        <img
          src={whatsappIcon}
          alt=""
          className="Call-det5"
          onClick={() => navigate("/products")}
        />
      </div>
    );
}