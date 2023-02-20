import React from 'react'

export default function Services() {
  return (
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
          <p>
          As a software engineering service provider, we offer a range of services to help our clients meet their technology needs. From custom software development to web application development, mobile app development, cloud-based solutions, software maintenance and support, database management, DevOps, and software consultancy, we have the expertise and experience to deliver high-quality solutions tailored to our clients' unique requirements. Our team of skilled software engineers is committed to providing top-notch services and delivering projects on time and within budget, while ensuring excellent customer satisfaction.          </p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box" >
            <div class="icon"><i class="bi bi-briefcase"></i></div>
            <h4 class="title"><a href="">Custom Software Development</a></h4>
            <p class="description">Develop and deliver custom software solutions tailored to clients' unique needs, using a range of programming languages, frameworks, and tools.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box"  >
            <div class="icon"><i class="bi bi-card-checklist"></i></div>
            <h4 class="title"><a href="">Web Application Development</a></h4>
            <p class="description">Design and develop web-based applications, including websites, web portals, and e-commerce platforms, using modern web technologies such as HTML, CSS, JavaScript, React, and Node.js</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box"  >
            <div class="icon"><i class="bi bi-bar-chart"></i></div>
            <h4 class="title"><a href="">Mobile App Development</a></h4>
            <p class="description">Develop native and hybrid mobile applications for iOS and Android platforms, leveraging frameworks such as React Native and Xamarin.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" > 
            <div class="icon"><i class="bi bi-binoculars"></i></div>
            <h4 class="title"><a href="">Database Management</a></h4>
            <p class="description">Design and manage databases for clients, using SQL and NoSQL technologies, and ensure that data is stored securely and accessed efficiently.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box"  >
            <div class="icon"><i class="bi bi-brightness-high"></i></div>
            <h4 class="title"><a href="">Software Maintenance and Support</a></h4>
            <p class="description">Provide ongoing maintenance and support services for existing software applications, ensuring that they remain up-to-date, secure, and free from bugs.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box"  >
            <div class="icon"><i class="bi bi-calendar4-week"></i></div>
            <h4 class="title"><a href="">DevOps</a></h4>
            <p class="description"> Implement DevOps practices, including continuous integration and continuous deployment (CI/CD) pipelines, to streamline software development processes and improve software quality</p>
          </div>
        </div>

      </div>
    </section>
  )
}
