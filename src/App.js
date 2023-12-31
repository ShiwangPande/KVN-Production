import './App.css';
import Carousel from "./carousel-3/Carousel.js"
import Navbar from './Navbar.js';
import Home from './Page/Home';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Production from './Page/Production.js';
import Gallery from './Page/Gallery.js';
import Funding from './Page/Funding.js';
import About from './Page/AboutUs.js';
import MusicVideo from './Page/MusicVideo.js';
import Distribution from './Page/Distribution.js';
import Careers from './Page/Careers.js';
import OurFounder from './Page/OurFounder.js';
import Contact from './Page/Contact.js';
import InstallPopup from './Components/InstallButton.js';
function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleInstall = () => {
    window.deferredPrompt.prompt();
    setShowPopup(false);
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      window.deferredPrompt = e;
      setShowPopup(true);
    });
    setTimeout(() => {
      setShowPopup(true);
    }, 5000);
  }, []);





  return (
    <div className="App">
      <Router>

        <InstallPopup showPopup={showPopup} onInstall={handleInstall} />
        <Routes>
          <Route path="/" className='home' element={<Home />} />
          {/* <Route path="/production" element={<Production />} /> */}
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          {/* <Route path="/funding" element={<Funding />} /> */}
          {/* <Route path="/musicvideos" element={<MusicVideo />} /> */}
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/ourfounder" element={<OurFounder />} />
          {/* <Route path="/careers" element={<Careers />} /> */}
          <Route path="/contact" element={<Contact />} />

        </Routes>

        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
