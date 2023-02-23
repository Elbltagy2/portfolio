import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [active,setactive]=useState(0);
  return (
    <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src={require("../assets/img/profile-img.jpg")} alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Ahmed Elbltagy</a></h1>
        <div className="social-links mt-3 text-center">
          <a target={"_blank"} href="https://www.facebook.com/ahmed.elbltagy.9849" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a target={"_blank"} href="https://www.linkedin.com/in/ahmed-elbltagy-929540197/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a target={"_blank"} href="https://github.com/Elbltagy2" className="linkedin"><i className="bx bxl-github"></i></a>

        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a onClick={()=>{setactive(0)}} href="#hero" id='heroB' className={`nav-link scrollto ${active===0?"active":"none"} `}><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a onClick={()=>{setactive(1)}} href="#about" id='aboutB' className={`nav-link scrollto ${active===1?"active":"none"} `}><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a onClick={()=>{setactive(2)}} href="#resume"id='resumeB' className={`nav-link scrollto ${active===2?"active":"none"} `}><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a  onClick={()=>{setactive(3)}} href="#portfolio"id='portfolioB' className={`nav-link scrollto ${active===3?"active":"none"} `}><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a onClick={()=>{setactive(4)}} href="#services" id='servicesB' className={`nav-link scrollto ${active===4?"active":"none"} `}><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a onClick={()=>{setactive(5)}} href="#contact" id='contactB' className={`nav-link scrollto ${active===5  ?"active":"none"} `}><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
