import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Facts from './Components/Facts';

// import Resume from './Resume';
// import Skills from './Skills';
// import Softwares from './Softwares';
import Projects from './Components/projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SocialLinks from './Components/Socials';
import './App.css';



function App() {
  return (
    <div className="pt-0">
   <Navbar/>  
   <Hero/>
   <About/>
   <Facts/>
  
   {/* <Resume/> */}
   {/* <Skills/> */}
   {/* <Softwares/>     */}
   <Projects/>
   <Contact/>
   <Footer/>
   <SocialLinks/>
   </div>
  );
}

export default App;
