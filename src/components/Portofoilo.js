import React from 'react'
import { Link } from 'react-router-dom'
export default function Portofoilo() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

      
        <div className="row portfolio-container" >

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={require("../assets/img/gpt.png")} className="img-fluid" alt=""/>
              <div className="portfolio-links">
              <Link to="/projectdetalis/gpt" > <i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={require("../assets/img/haircut.png")} className="img-fluid" alt=""/>
              <div className="portfolio-links">
              <Link to="/projectdetalis/Haricut" > <i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

          

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={require("../assets/img/e-learning.png")} className="img-fluid" alt=""/>
              <div className="portfolio-links">
              <Link to="/projectdetalis/e-learning" > <i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

        </div>
        
        <div className="row portfolio-container" >

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={require("../assets/img/admin.png")} className="img-fluid" alt=""/>
              <div className="portfolio-links">
              <Link to="/projectdetalis/admin" > <i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={require("../assets/img/mutishop.png")} className="img-fluid" alt=""/>
              <div className="portfolio-links">
              <Link to="/projectdetalis/e-commerce" > <i className="bx bx-link"></i></Link>
              </div>
            </div>
          </div>

         

        </div>

      </div>
    </section>
  )
}
