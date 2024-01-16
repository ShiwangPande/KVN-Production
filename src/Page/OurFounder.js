import React, { useState } from 'react'
import logo from "../AE LOGO.svg"

function OurFounder() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <div>
            <nav class=" backdrop-blur-[1.8px] lg:bg-white/40 bg-[#f8aa21] fixed w-full px-5 z-20 top-0 start-0  border-b-2 border-black/40 shadow-md">
                <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-3">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img rel="preload" as="image" src={logo} class="h-20" alt="Flowbite Logo" />
                        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"> <b className='text-yellow-500' > KVP </b>Productions</span> */}
                    </a>
                    <button onClick={handleShowNavbar} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div id="navbar-default" className={`w-full md:block  md:w-auto nav-elements  ${showNavbar && 'active'}`}>
                        <ul class="text-xl  flex flex-col p-4 md:p-0 mt-3 border-none lg:border border-gray-100 rounded-lg md:flex-row md:space-x-9 rtl:space-x-reverse md:mt-0 md:border-0    dark:border-gray-700">
                            <li>
                                <a href="/" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#000000] md:hover:text-white  hover:text-white ">Home</a>
                            </li>

                            <li>
                                <a href="/aboutus" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#000000] md:hover:text-white  hover:text-white ">About Us</a>
                            </li>

                            <li>
                                <a href="/ourfounder" class="block  py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-white md:p-0  font-semibold md:font-normal  md:dark:text-white" aria-current="page" >Our Founder</a>
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
            <div className='mx-28 text-lg'>



                <h1 className='mb-4 mx-5 pt-28  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Founder page - Tharian Jacob</h1>
                <p className='text-xl  mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif'>Abhijit Enterprises is a story that began with a simple idea and a shared love
                    for cinema. The roots of our journey trace back to the year 1981 when a
                    group of friends gathered for a movie night that would unknowingly set the
                    stage for something extraordinary. "Khoobsurat" was the film of choice, and
                    in a quaint gathering in Gandhi Nagar, each friend enthusiastically
                    contributed 100 rupees. This collective pooling of resources not only enabled
                    us to acquire the movie but also symbolised the shared passion for
                    storytelling that would become the essence of Abhijit Enterprises.
                    With a meagre budget of 1,000 rupees, we captured a moment in time, the
                    inception of our cinematic dreams. The screening in 1981 was a humble aff air,
                    with only the founders present, creating a memory etched in the annals of
                    Abhijit Enterprises.</p>
                <p className='text-xl mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif'>Fast forward to 1985, a pivotal year that marked the birth of Abhijit
                    Enterprises. Undeterred by setbacks, we embarked on a mission to pick up a
                    movie collectively. Ten individuals joined forces, pooling their resources to
                    acquire a film priced at 50,000 rupees. Little did we know that the expenses
                    would soar to 30,000 rupees, leaving us without a single rupee in return.</p>
                <p className='text-xl mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif'>The true turning point arrived in 1987 with the release of our first full-fledged
                    movie, "Thikana." Amidst multiple failures, we persevered, learning and
                    growing with each cinematic endeavour. The breakthrough came in 1988 with
                    the release of "Tamacha," a film that not only resonated with audiences but
                    also marked a profit of 1 lakh 25 thousand rupees, paving the way for a new
                    chapter in our journey.</p>
                <p className='text-xl mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif'>Our ascent continued with collaborations with giants like Yash Raj Films,
                    unlocking new opportunities and expanding our horizons. However, it was the
                    partnership with Mukesh Bhatt that proved to be the turning point. Mukesh
                    Bhatt, a figure not just in business but in kinship, became a pivotal part of
                    our success. His trust and camaraderie fueled our venture into the realm of
                    Bhatt films, contributing to the boom of our career. Out of the numerous
                    movies associated with Mahesh Bhatt and Mukesh Bhatt, we proudly claim a
                    staggering 95%, a testament to the enduring bonds and the trust invested in
                    our cinematic prowess.</p>
                <p className='text-xl mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif'>As the pages of our story turn, the legacy of Abhijit Enterprises finds its
                    continuation in the capable hands of Abhijit Tharian. Today, as Abhijit
                    Tharian steps into the leadership role, he carries forward the torch of
                    passion, innovation, and commitment that defines Abhijit Enterprises. The
                    journey continues, and the magic of cinema persists, transcending
                    boundaries under the able stewardship of the next generation.</p>
                <h1 className='mb-4 mx-5 text-3xl font-extrabold leading-none tracking-tight text-gray-900'>Abhijit Tharian</h1>
                <p className='text-xl mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif'>Growing up surrounded by the enchanting tunes of songs and the captivating
                    allure of movies, Abhijit Tharian's childhood was painted with the colours of
                    entertainment. His love for these art forms became the guiding force behind
                    his aspirations.</p>
                <p className='text-xl mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif'>After pursuing his education at "Queen Mary" in London, Abhijit, armed with
                    a master's degree in Investment Banking , returned to the family fold in 2019.
                    His initial involvement started in bits and pieces, gradually growing into a
                    significant contribution to Abhijit Enterprises.</p>
                <p className='text-xl mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif'>What sets Abhijit apart is his dream to transform the family business into a
                    pan-India distribution giant and venture into production. His finance degree
                    isn't just a piece of paper; it's the backbone that supports his vision for
                    expansion.</p>
                <p className='text-xl mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif'>Abhijit seamlessly blends his intrinsic love for cinema with the strategic
                    mindset gained through his education, shaping the future of Abhijit
                    Enterprises.</p>
            </div>
        </div>
    )
}

export default OurFounder