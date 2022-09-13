import React from "react";
import "./style.css";
import skin from "../../../assest/images/skin4.jpg";
import skin1 from "../../../assest/images/skin2.jpg";
import { useNavigate } from "react-router-dom";
export default function ViewCom(props) {
    let navigate = useNavigate();
    return (
      <div
        className="View-Container"
        onClick={() => navigate("/Productspecfication")}
      >
        <span className="View-detail1">We believe in natural,orgaanic products</span>
        <span className="View-detail2">
          <span className="detail2-spec1">Blessing for every skin</span>
          <span className="detail2-spec2">Get yours</span>
        </span>
        <img src={skin} alt="" className="View-img1" />
        <img src={skin1} alt="" className="View-img2" />
        <span className="detail3-spec3">Get Started</span>
      </div>
    );
}