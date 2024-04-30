import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Menu from './Components/Menu';
import Team from './Components/Team';
import Booking from './Components/Booking';
import Contact from './Components/Contact';

import Login from './Components/Login';
import Signup from './Components/Signup';
import Card from './Components/Card';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (you may need to implement this logic)
    // For demonstration purposes, setting isLoggedIn to true
    setIsLoggedIn(true);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
        <Route path="/service" element={isLoggedIn ? <Service /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/card" element={<Card></Card>}/>
        <Route path="/team" element={isLoggedIn ? <Team /> : <Navigate to="/login" />} />
        <Route path="/booking" element={isLoggedIn ? <Booking /> : <Navigate to="/login" />} />
        <Route path="/menu" element={isLoggedIn ? <Menu /> : <Navigate to="/login" />} />
     
      </Routes>
    </Router>
  );
};

export default App;
