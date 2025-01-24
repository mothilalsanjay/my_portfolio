import { Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import Skills from './skills';

const Main = () => (
  <div className='main-content'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  </div>
);

export default Main;
