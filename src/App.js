
import { Route, Routes } from 'react-router-dom';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import './App.css';
import Home from './Portfolio/Home';
import About from './Portfolio/About';
import Contact from './Portfolio/Contact';
import Services from './Portfolio/Services';
import Projects from './Portfolio/Projects';
import Footer from './Portfolio/Shared/Footer';
import Navbar from './Portfolio/Shared/Navbar';
import Blog from './Portfolio/Blog';
import Monota from './Portfolio/Details/Monota';
import Greenorganic from './Portfolio/Details/Greenorganic';
import Mobile from './Portfolio/Details/Mobile';
import Laptop from './Portfolio/Details/Laptop';
import Convention from './Portfolio/Details/Convention';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
  


      

      {/* <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/home" element={<About />} ></Route>
        <Route path="/home" element={<Contact />} ></Route>
        <Route path="/home" element={<Services />} ></Route>
        <Route path="/home" element={<Projects />} ></Route>
        <Route path="/home" element={<Portfolio />} ></Route>
         <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes> */}

      <Routes>
 <Route path="monota" element={<Monota></Monota>}></Route>
 <Route path="/greenorganic" element={<Greenorganic></Greenorganic>}></Route>
 <Route path="/laptop" element={<Laptop></Laptop>}></Route>
 <Route path="/mobile" element={<Mobile></Mobile>}></Route>
 <Route path="/convention" element={<Convention></Convention>}></Route>
 <Route path="/blog" element={<Blog></Blog>}></Route>
        
         
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
