import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js'
import Skills from './components/Skills/Skills.js';


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
      <section id="skills">
        <Skills></Skills>
      </section>
    </div>
  );
}

export default App;
