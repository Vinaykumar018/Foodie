import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Service from './Components/Service';
import Menu from './Components/Menu';
import Team from './Components/Team';
import Booking from './Components/Booking';

import Contact from './Components/Contact';
import Testimonal  from './Components/Testimonal';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Card from './Components/Card';
import PlaceOrder from './Components/PlaceOrder';
// import PaymentForm from './Components/Checkout';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/card" element={<Card />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/booking" element={<Booking></Booking>}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/testimonial" element={<Testimonal/>} />

      </Routes>
     
    </Router>
  );
};

export default App;
