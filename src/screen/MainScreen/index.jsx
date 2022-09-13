import React, { useState,useEffect } from "react";

import { CallToAction, Card, NavBar, ProdSpecf, ViewCom } from "../../component";
import { useSelector } from "react-redux";
import "./style.css";
import { Route, useLocation,Routes } from "react-router-dom";
import AllProducts from "./products";
import ContactUs from "./contactus";
import About from "./about";
export default function MainScreen(props) {
  
  const count = useSelector((store) => store.counter);
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ViewCom />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/Productspecfication" element={<ProdSpecf />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <CallToAction />
        
      </div>
    );
}