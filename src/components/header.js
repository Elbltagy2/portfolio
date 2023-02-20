import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src={require("../assets/img/profile-img.jpg")} alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Ahmed Elbltagy</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://www.facebook.com/ahmed.elbltagy.9849" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.linkedin.com/in/ahmed-elbltagy-929540197/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a href="https://github.com/Elbltagy2" className="linkedin"><i className="bx bxl-github"></i></a>

        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" id='heroB' className="nav-link scrollto"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" id='aboutB'className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume"id='resumeB' className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio"id='portfolioB' className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" id='servicesB' className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" id='contactB' className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
