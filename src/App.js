import './App.css';
import Header from './components/header';
import { useEffect } from 'react';
import "./assets/css/style.css"
import Projectdetails from './components/Projectdetails';
import { Projectscontent } from './Projectscontent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home';

function App() {
  useEffect(()=>{
    console.log(Projectscontent);
    
 },[]);
  
    
  return (
    < >
    <BrowserRouter>
      <Header/>    
   <Routes>
     <Route exact path="/" element={<Home/>}  />
     <Route path="/projectdetalis/:Name" element={ <Projectdetails />}  />
   </Routes>
 
    
     
     

      </BrowserRouter>

    </>
  );
}

export default App;
