import './App.css'
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="">
      <Navbar />
      <Mainpage />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
