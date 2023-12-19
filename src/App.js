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

function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="App">
      <Router>
        <Navbar />

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Routes>
            <Route path="/" className='home' element={<Home />} />
            <Route path="/production" element={<Production />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/music-videos" element={<MusicVideo />} />
            <Route path="/distribution" element={<Distribution />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </motion.div>
        {/* <Footer /> */}
      </Router>

    </div>
  );
}

export default App;
