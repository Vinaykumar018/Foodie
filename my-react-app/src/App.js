import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Service from './Components/Service';
import Menu from './Components/Menu';
import Team from './Components/Team';
import Booking from './Components/Booking';

import Contact from './Components/Contact';



const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/booking" element={<Booking></Booking>}/>
        <Route path="/menu" element={<Menu />} />

      </Routes>
     
    </Router>
  );
};

export default App;
