import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Facts from './Facts';

import Resume from './Resume';
import Skills from './Skills';
import Softwares from './Softwares';
import Projects from './projects';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';



function App() {
  return (
    <div className="pt-0">
   <Navbar/>  
   <Hero/>
   <About/>
   <Facts/>
  
   <Resume/>
   <Skills/>
   <Softwares/>    
   <Projects/>
   <Contact/>
   <Footer/>
   </div>
  );
}

export default App;
