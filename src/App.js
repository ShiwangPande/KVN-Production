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
import Contact from './Page/Contact.js';
import InstallPopup from './Components/InstallButton.js';
function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleInstall = () => {
    // Trigger browser's installation prompt
    window.deferredPrompt.prompt();
    // Hide the popup after prompting
    setShowPopup(false);
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent default prompt
      e.preventDefault();
      // Store the event for later use
      window.deferredPrompt = e;
      // Show the popup
      setShowPopup(true);
    });
  }, []);
  return (
    <div className="App">
      <Router>

      <InstallPopup showPopup={showPopup} onInstall={handleInstall} />
        <Routes>
          <Route path="/" className='home' element={<Home />} />
          <Route path="/production" element={<Production />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/musicvideos" element={<MusicVideo />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
