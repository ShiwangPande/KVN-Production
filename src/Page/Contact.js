import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../logoss.webp"
import call from "./call.svg";
import mail from "./mail.svg";
function Contact() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const mainControls = useAnimation();
    return (
        <div> <nav class="bg-zinc-900	 fixed w-full px-5 z-20 top-0 start-0  border-b-2 border-gray-700 shadow-md">
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
                            <a href="/" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-[#e2c8b7]   hover:text-white " >Home</a>
                        </li>
                        <li>
                            <a href="/production" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white "  >Production</a>
                        </li>
                        <li>
                            <a href="/funding" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Funding</a>
                        </li>
                        <li>
                            <a href="/distribution" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Distribution</a>
                        </li>
                        <li>
                            <a href="/musicvideos" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Music Videos</a>
                        </li>
                        <li>
                            <a href="/careers" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Careers</a>
                        </li>
                        <li>
                            <a href="/gallery" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Gallery</a>
                        </li>
                        <li>
                            <a href="/aboutus" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-[#e2c8b7]   hover:text-white  ">About Us</a>
                        </li>
                        <li>
                            <a href="/contact" class="block  py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-white md:p-0  font-semibold md:font-normal  md:dark:text-white " aria-current="page">Contact</a>
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



            <div className='mt-28'>

                <div class="flex flex-col-reverse lg:flex-row my-24 mx-auto max-w-[80%]">
                    <div>
                        <iframe title="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.45159355749223!2d75.76222851608853!3d23.184340570882785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963753badfd22c9%3A0xb07439fafb91bd9d!2z4KSV4KS-4KSyIOCkuOCksOCljeCkqiDgpKrgpYLgpJzgpL4g4KS24KS-4KSC4KSk4KS_IOCkieCknOCljeCknOCliOCkqA!5e1!3m2!1sen!2sin!4v1689792748743!5m2!1sen!2sin" frameborder="0" class="map rounded-lg aspect-square min-h-[20rem] lg:aspect-video lg:h-fit "></iframe>
                        <div className='m-5  bg-gray-200 flex-row item-centers justify-center items-center gap-20 border rounded '>
                            <img src={call} className='my-2 w-20 mx-auto' alt="" />
                            <div className='flex flex-col  lg:flex-col '>
                                <h1 className='font-semibold mx-auto text-xl mb-3'>
                                    Call us Directly at </h1>
                                {/* <br /> */}
                                <a className='font-semibold mx-auto text-blue-500 text-lg mb-3' href="tel:abc">
                                    abc </a>
                            </div>

                            {/* follow us and contact us */}

                        </div>
                        <div className='m-5  bg-gray-200 flex-row item-centers justify-center items-center gap-20 border rounded '>
                            <img src={mail} className='my-2 w-20 mx-auto ' alt="" />
                            <div className='flex flex-col'>
                                <h1 className='font-semibold mx-auto text-xl mb-3'>
                                    Email us at  </h1>
                                {/* <br /> */}
                                <a className='font-semibold mx-auto text-blue-500 text-lg mb-3' href="mailto:abc@gmail.com">
                                    abc@gmail.com </a>
                            </div>

                            {/* follow us and contact us */}

                        </div>

                    </div>

                    <form class="w-full max-w-lg m-auto mt-36 mb-32 " action="https://formsubmit.co/abc@gmail.com"
                        method="POST">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" />

                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    E-mail
                                </label>
                                <input class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />

                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Message
                                </label>
                                <textarea class="form-control no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="query"

                                    style={{ height: "150px" }}
                                    placeholder="write your query here"
                                    cols="30"
                                    rows="10"
                                    required></textarea>

                            </div>
                        </div>
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3">
                                <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                    Send
                                </button>
                                <input type="hidden" name="_next"
                                    value="https://mesathank.netlify.app/" />
                            </div>
                            <div class="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact