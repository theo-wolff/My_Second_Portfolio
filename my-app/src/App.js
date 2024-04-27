import './App.css';
import Navbar from './components/navbar/Navbar.js';

function App() {
  return (
    <div >
      <section id="home">
        <Navbar></Navbar>
      </section>
      <section id="about-me">About me</section>
      <section id="my-work">My work</section>
      <section id="hobbies"> Hobbies</section>
    </div>
  );
}

export default App;
