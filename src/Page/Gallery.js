import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../AE LOGO.svg"
import { Tabs, Tab } from "@nextui-org/react";


function Gallery() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const mainControls = useAnimation();
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
                <a href="/" class="block  py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-white md:p-0  font-semibold md:font-normal  md:dark:text-white" aria-current="page">Home</a>
              </li>
              
              <li>
                <a href="/aboutus" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#000000] md:hover:text-white  hover:text-white ">About Us</a>
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




            <div class="flex items-center mt-24 justify-center py-4 md:py-8 flex-wrap">

                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options" color="primary" variant="bordered">
                        <Tab className=''
                            key="photos"
                            title={
                                <div className="flex items-center space-x-2 ">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        height="24"
                                        role="presentation"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        fill="none"
                                    >
                                        <path d="M2.58078 19.0112L2.56078 19.0312C2.29078 18.4413 2.12078 17.7713 2.05078 17.0312C2.12078 17.7613 2.31078 18.4212 2.58078 19.0112Z" fill="currentColor" />
                                        <path d="M9.00109 10.3811C10.3155 10.3811 11.3811 9.31553 11.3811 8.00109C11.3811 6.68666 10.3155 5.62109 9.00109 5.62109C7.68666 5.62109 6.62109 6.68666 6.62109 8.00109C6.62109 9.31553 7.68666 10.3811 9.00109 10.3811Z" fill="currentColor" />
                                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z" fill="currentColor" />
                                    </svg>
                                    <span>Photos</span>
                                </div>
                            }
                        >
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>

                            </div>
                        </Tab>
                        <Tab
                            key="music"
                            title={
                                <div className="flex items-center space-x-2">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        height="24"
                                        role="presentation"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        fill="none"
                                    >
                                        <path d="M9.66984 13.9219C8.92984 13.9219 8.33984 14.5219 8.33984 15.2619C8.33984 16.0019 8.93984 16.5919 9.66984 16.5919C10.4098 16.5919 11.0098 15.9919 11.0098 15.2619C11.0098 14.5219 10.4098 13.9219 9.66984 13.9219Z" fill="currentColor" />
                                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.12 9.8C17.12 10.41 16.86 10.95 16.42 11.27C16.14 11.47 15.8 11.58 15.44 11.58C15.23 11.58 15.02 11.54 14.8 11.47L12.51 10.71C12.5 10.71 12.48 10.7 12.47 10.69V15.25C12.47 16.79 11.21 18.05 9.67 18.05C8.13 18.05 6.87 16.79 6.87 15.25C6.87 13.71 8.13 12.45 9.67 12.45C10.16 12.45 10.61 12.59 11.01 12.8V8.63V8.02C11.01 7.41 11.27 6.87 11.71 6.55C12.16 6.23 12.75 6.15 13.33 6.35L15.62 7.11C16.48 7.4 17.13 8.3 17.13 9.2V9.8H17.12Z" fill="currentColor" />
                                    </svg>
                                    <span>Music</span>
                                </div>
                            }
                        >
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>

                            </div>
                        </Tab>
                        <Tab
                            key="videos"
                            title={
                                <div className="flex items-center space-x-2">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        height="24"
                                        role="presentation"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        fill="none"
                                    >
                                        <path d="M14.7295 2H9.26953V6.36H14.7295V2Z" fill="currentColor" />
                                        <path d="M16.2305 2V6.36H21.8705C21.3605 3.61 19.3305 2.01 16.2305 2Z" fill="currentColor" />
                                        <path d="M2 7.85938V16.1894C2 19.8294 4.17 21.9994 7.81 21.9994H16.19C19.83 21.9994 22 19.8294 22 16.1894V7.85938H2ZM14.44 16.1794L12.36 17.3794C11.92 17.6294 11.49 17.7594 11.09 17.7594C10.79 17.7594 10.52 17.6894 10.27 17.5494C9.69 17.2194 9.37 16.5394 9.37 15.6594V13.2594C9.37 12.3794 9.69 11.6994 10.27 11.3694C10.85 11.0294 11.59 11.0894 12.36 11.5394L14.44 12.7394C15.21 13.1794 15.63 13.7994 15.63 14.4694C15.63 15.1394 15.2 15.7294 14.44 16.1794Z" fill="currentColor" />
                                        <path d="M7.76891 2C4.66891 2.01 2.63891 3.61 2.12891 6.36H7.76891V2Z" fill="currentColor" />
                                    </svg>
                                    <span>Videos</span>
                                </div>
                            }
                        >
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>
                                <div>
                                    <img class="h-auto max-w-full rounded-lg" src="https://source.unsplash.com/random" alt="" />
                                </div>

                            </div>
                        </Tab>
                    </Tabs>
                </div>

            </div>


        </div>
    )
}

export default Gallery