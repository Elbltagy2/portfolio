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
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" id='heroB' className="nav-link scrollto"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" id='aboutB'className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume"id='resumeB' className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio"id='portfolioB' className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" id='servicesB' className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact"id='contactB' className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
