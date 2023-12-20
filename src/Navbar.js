import React from 'react'
import logo from "./logo.png"
function Navbar() {

  return (
    <div>
      <nav class="bg-zinc-900	 fixed w-full z-20 top-0 start-0  border-b-2 border-gray-700 shadow-md">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-3">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-20" alt="Flowbite Logo" />
            {/* <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"> <b className='text-yellow-500' > KVP </b>Productions</span> */}
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block  md:w-auto" id="navbar-default">
            <ul class="text-xl  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-9 rtl:space-x-reverse md:mt-0 md:border-0    dark:border-gray-700">
              <li>
                <a href="/" class="block  py-2 px-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0  font-semibold md:font-normal  md:dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/production" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-[#e2c8b7]   hover:text-white ">Production</a>
              </li>
              <li>
                <a href="/funding" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Funding</a>
              </li>
              <li>
                <a href="/distribution" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Distribution</a>
              </li>
              <li>
                <a href="/music-videos" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Music Videos</a>
              </li>
              <li>
                <a href="/careers" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Careers</a>
              </li>
              <li>
                <a href="/gallery" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Gallery</a>
              </li>
              <li>
                <a href="/about-us" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">About Us</a>
              </li>
              <li>
                <a href="/contact" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar