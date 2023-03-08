import {React,useEffect,useState} from 'react'
import '../assets/css/style.css'
import Slider from './Slider'
import './css.css'
import { Projectscontent } from '../Projectscontent'
import { useParams } from 'react-router-dom';
const Projectdetails = (props) => {
  const name = useParams().Name;
  console.log(name);
 const slected=Projectscontent.filter(item=> item.name===name);



  return (
  <>

  <main id="main">

    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Portfoio Details</h2>
          <ol>
            <li>Home</li>
            <li>Project  Details</li>
          </ol>
        </div>

      </div>
    </section>

    <section id="portfolio-details" className="portfolio-details">
      <div className="container">

        <div className="row gy-4  ">

          <div className=" col-lg-6">
           <Slider photo={slected[0].photos} path={name}/>
          </div>

          <div className="col-lg-6">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Project date</strong>: {slected[0].date}</li>
                <li><strong>Project URL</strong>: <a target={"_blank"} href={slected[0].url}>{slected[0].url}</a></li>
              </ul>
            </div>
            <div className="portfolio-description">
              <h2>Project details</h2>
              <p>
              {slected[0].descrebtion}

              </p>
            </div>
          </div>

        </div>

      </div>
    </section>


  </main>

 
 </>
  )
}

export default Projectdetails