
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Portfolio/Home';
import About from './Portfolio/About';
import Contact from './Portfolio/Contact';
import Services from './Portfolio/Services';
import Projects from './Portfolio/Projects';
import Resume from './Portfolio/Resume';
import Footer from './Portfolio/Shared/Footer';
import Navbar from './Portfolio/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/services" element={<Services />} ></Route>
        <Route path="/projects" element={<Projects />} ></Route>
        <Route path="/resume" element={<Resume />} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
