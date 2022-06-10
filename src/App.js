
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Portfolio/Home';
import About from './Portfolio/About';
import Contact from './Portfolio/Contact';
import Services from './Portfolio/Services';
import Projects from './Portfolio/Projects';
import Portfolio from './Portfolio/Portfolio';

import Footer from './Portfolio/Shared/Footer';
import Navbar from './Portfolio/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/home" element={<About />} ></Route>
        <Route path="/home" element={<Contact />} ></Route>
        <Route path="/home" element={<Services />} ></Route>
        <Route path="/home" element={<Projects />} ></Route>
        <Route path="/home" element={<Portfolio />} ></Route>
         
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
