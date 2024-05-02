import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js'
import Skills from './components/Skills/Skills.js';
import Experiences from './components/Experiences/Experiences.js';
import Education from './components/Education/Education.js';



function App() {
  return (
    <div >
      <section id="home">
        <Navbar></Navbar>
        <Home></Home>
      </section>
      <section id="about-me">
        <About></About>
      </section>
      <section id="education">
        <Education></Education>
      </section>
      <section id="skills">
        <Skills></Skills>
      </section>
      <section id="experiences">
        <Experiences></Experiences>
      </section>
      

    </div>
  );
}

export default App;
