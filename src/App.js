import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Facts from './Facts';
// import AboutSection from './Aboutyou';
import Projects from './projects';
import Contact from './Contact';
import './App.css';


function App() {
  return (
    <div>
   <Navbar></Navbar>,
   <Hero></Hero>
   <About></About>
   <Facts></Facts>
   {/* <AboutSection></AboutSection> */}
   <Projects></Projects>
   <Contact></Contact>
   </div>
  );
}

export default App;
