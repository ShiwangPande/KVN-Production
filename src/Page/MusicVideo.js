import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../AE LOGO.svg"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
function MusicVideo() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onOpenChange: onOpenChange1 } = useDisclosure();
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onOpenChange: onOpenChange2 } = useDisclosure();
  const { isOpen: isOpenModal3, onOpen: onOpenModal3, onOpenChange: onOpenChange3 } = useDisclosure();
  const { isOpen: isOpenModal4, onOpen: onOpenModal4, onOpenChange: onOpenChange4 } = useDisclosure();
  const { isOpen: isOpenModal5, onOpen: onOpenModal5, onOpenChange: onOpenChange5 } = useDisclosure();
  const { isOpen: isOpenModal6, onOpen: onOpenModal6, onOpenChange: onOpenChange6 } = useDisclosure();
  const { isOpen: isOpenModal7, onOpen: onOpenModal7, onOpenChange: onOpenChange7 } = useDisclosure();
  const { isOpen: isOpenModal8, onOpen: onOpenModal8, onOpenChange: onOpenChange8 } = useDisclosure();
  const { isOpen: isOpenModal9, onOpen: onOpenModal9, onOpenChange: onOpenChange9 } = useDisclosure();
  const { isOpen: isOpenModal10, onOpen: onOpenModal10, onOpenChange: onOpenChange10 } = useDisclosure();
  const { isOpen: isOpenModal11, onOpen: onOpenModal11, onOpenChange: onOpenChange11 } = useDisclosure();
  const { isOpen: isOpenModal12, onOpen: onOpenModal12, onOpenChange: onOpenChange12 } = useDisclosure();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const mainControls = useAnimation();
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
                <a href="/" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 text-[#e2c8b7]   hover:text-white " >Home</a>
              </li>
              <li>
                <a href="/production" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Production</a>
              </li>
              <li>
                <a href="/funding" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Funding</a>
              </li>
              <li>
                <a href="/distribution" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Distribution</a>
              </li>
              <li>
                <a href="/musicvideos" class="block  py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-white md:p-0  font-semibold md:font-normal  md:dark:text-white " aria-current="page" >Music Videos</a>
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
                <a href="/contact" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      <div class="grid grid-cols-1 lg:grid-cols-2  gap-4 mt-36 mx-3 ">

        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal1} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal1}
          size="full"
          width='100%'
          onOpenChange={onOpenChange1}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal1) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal1}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal2} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal2}
          size="full"
          width='100%'
          onOpenChange={onOpenChange2}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal2) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal2}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal3} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal3}
          size="full"
          width='100%'
          onOpenChange={onOpenChange3}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal3) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal3}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal4} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal4}
          size="full"
          width='100%'
          onOpenChange={onOpenChange4}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal4) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal4}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal5} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal5}
          size="full"
          width='100%'
          onOpenChange={onOpenChange5}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal5) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal5}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal6} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal6}
          size="full"
          width='100%'
          onOpenChange={onOpenChange6}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal6) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal6}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal7} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal7}
          size="full"
          width='100%'
          onOpenChange={onOpenChange7}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal7) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal7}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal8} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal8}
          size="full"
          width='100%'
          onOpenChange={onOpenChange8}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal8) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal8}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal9} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal9}
          size="full"
          width='100%'
          onOpenChange={onOpenChange9}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal9) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal9}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal10} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal10}
          size="full"
          width='100%'
          onOpenChange={onOpenChange10}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal10) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal10}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal11} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal11}
          size="full"
          width='100%'
          onOpenChange={onOpenChange11}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal11) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal11}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
        <section class="h-[25rem] rounded-lg flex  bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
          <div class="px-1  max-w-screen-2xl text-center py-10 lg:py-20 ">
            <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-white  ">KAATERA Official 4K Trailer</h1>
            <p class="mb-2 text-lg font-normal text-gray-300 lg:text-xl p-6">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
            <div class="flex flex-col  sm:flex-row sm:justify-center ">

              <Button onPress={onOpenModal12} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Play Video  <svg width="40px" className="ml-2" height="40px" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#000" />
                </svg>
              </Button>
            </div>
          </div>
        </section>
        <Modal
          backdrop="opaque"
          isOpen={isOpenModal12}
          size="full"
          width='100%'
          onOpenChange={onOpenChange12}
          scrollBehavior={scrollBehavior}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal12) => (
              <>
                <div className='event_modal h-full p-0 ' >
                  <iframe class="w-full h-full max-w-full  shadow-xl" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=pCOuvdxIO5xHWp4C" title="YouTube video player" autoplay controls frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  {/* <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-[80vh]  sm:w-[100vw] shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  <div className="m-5 " style={{ flex: "1 1 35%", maxHeight: "750px", overflowY: "auto" }}>
                    <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">KD - The Devil | Title Teaser | Kannada Movie |Prem's |Dhruva Sarja | Arjun Janya | KVN</ModalHeader>
                    <ModalBody >
                      <h2 id="modal-description" >
                        <h1 className='font-bold'>Abhijit Enterprises 2:48</h1> <br />

                        <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! Abhijit Enterprises presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for Abhijit Enterprises. Stay tuned for more!!!
                          ----------------------------------------------
                          Turn on Subtitles in Your Preferred Language.

                          #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                          ----------------------------------------------
                          ♫ Movie               :  KD - The Devil
                          ♫ Banner             : Abhijit Enterprises
                          ♫ Starring            : Dhruva Sarja
                          ♫ Producer          : KVN
                          ♫ Director            : Showman Prem's
                          ♫ Music               : Arjun Janya
                          ♫ Head-Business & Operations: Suprith
                          ♫ Writer               : Vijay Eshwar
                          ♫ D O P                : William David
                          ♫ Editor               : SRINIVAS P BABU
                          ♫ P R O                : Nagendra
                          ♫ Art Director     : Mohan B Kere
                          ----------------------------------------------
                          Like our Facebook page: https://www.facebook.com/kvnproductions
                          Follow us on Instagram: https://instagram.com/kvn.productions?utm_medium=copy_link
                          Follow us on Twitter: https://twitter.com/KvnProductions</p>

                      </h2>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onCloseModal12}>
                        Close
                      </Button>

                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>



      </div>


    </div>
  )
}

export default MusicVideo