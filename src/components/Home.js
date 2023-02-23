import React from 'react'
import Main from './main';
import About from './About';
import Facts from './Facts';
import Skills from './Skills';
import Portofoilo from './Portofoilo';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  return (
    <>
          <Main/>
      <main id="main">
        <About/>
        <Facts/>
        <Skills/>
        <Portofoilo/>
        <Services/>
        <Contact/>
      </main>
    </>
  )
}

export default Home