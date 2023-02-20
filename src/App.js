import './App.css';
import Header from './components/header';
import "./assets/css/style.css"
import Main from './components/main';
import About from './components/About';
import Facts from './components/Facts';
import Skills from './components/Skills';
import Portofoilo from './components/Portofoilo';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  
    
  return (
    <div className="App">
      <Header/>
      <Main/>
      <main id="main">
        <About/>
        <Facts/>
        <Skills/>
        <Portofoilo/>
        <Services/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
