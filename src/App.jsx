import './App.css'
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <Mainpage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
