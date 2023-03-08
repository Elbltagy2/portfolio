import React from 'react'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
           <p>
           As a software engineer, I am passionate about developing innovative solutions to solve complex problems. With years of experience in custom software development, web and mobile app development, database management, cloud-based solutions, DevOps, and software consultancy, I offer a comprehensive range of services to meet clients' technology needs. My commitment to delivering high-quality and efficient software solutions, along with ongoing maintenance and support, ensures that clients receive the best possible service.

                    </p>        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src={require("../assets/img/profile-img.jpg")} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">
            Our UI/UX Designer & Web Developer portfolio showcases our expertise in creating visually stunning and user-friendly web designs that meet clients' unique needs.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>28 Dec 2000</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+201156008597</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Cairo, Egy</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's degree</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ahmedelbltayg125@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
