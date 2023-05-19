import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Facts from './Facts';
import Resume from './Resume';
import Skills from './Skills';
import Softwares from './Softwares';
// import AboutSection from './Aboutyou';
import Projects from './projects';
import Contact from './Contact';
import './App.css';



function App() {
  return (
    <div className="pt-0">
   <Navbar></Navbar>,   
   <Hero></Hero>
   <About></About>
   <Facts></Facts>
   <Resume></Resume>
   <Skills></Skills>
   <Softwares></Softwares>
      {/* <AboutSection></AboutSection> */}
   <Projects></Projects>
   <Contact></Contact>
   </div>
  );
}

export default App;
