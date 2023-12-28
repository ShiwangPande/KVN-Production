import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../logoss.webp"

function AboutUs() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  return (
    <div>
      <nav class=" backdrop-blur-[1.8px] bg-white/40 fixed w-full px-5 z-20 top-0 start-0  border-b-2 border-black/40 shadow-md">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-3">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img rel="preload" as="image" src={logo} class="h-20" alt="Flowbite Logo" />
            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"> <b className='text-yellow-500' > KVP </b>Productions</span> */}
          </a>
          <button onClick={handleShowNavbar} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div id="navbar-default" className={`w-full md:block  md:w-auto nav-elements  ${showNavbar && 'active'}`}>
            <ul class="text-xl  flex flex-col p-4 md:p-0 mt-3  border border-gray-100 rounded-lg md:flex-row md:space-x-9 rtl:space-x-reverse md:mt-0 md:border-0    dark:border-gray-700">
              <li>
                <a href="/" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#000000] md:hover:text-white  hover:text-white ">Home</a>
              </li>

              <li>
                <a href="/aboutus" class="block  py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-white md:p-0  font-semibold md:font-normal  " aria-current="page" >About Us</a>
              </li>

              <li>
                <a href="/ourfounder" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#000000] md:hover:text-white  hover:text-white ">Our Founder</a>
              </li>

              <li>
                <a href="/distribution" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#000000] md:hover:text-white  hover:text-white ">Distribution</a>
              </li>


              <li>
                <a href="/contact" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#000000] md:hover:text-white  hover:text-white ">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
      >
      </motion.div>
    </div>
  )
}

export default AboutUs