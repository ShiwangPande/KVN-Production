import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import logo from "../logoss.webp"
import { Image } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

function Distribution() {
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onOpenChange: onOpenChange1 } = useDisclosure();
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onOpenChange: onOpenChange2 } = useDisclosure();
  const { isOpen: isOpenModal3, onOpen: onOpenModal3, onOpenChange: onOpenChange3 } = useDisclosure();
  const { isOpen: isOpenModal4, onOpen: onOpenModal4, onOpenChange: onOpenChange4 } = useDisclosure();
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const mainControls = useAnimation();
  return (
    <div>  <div className='mt-52 bg-white box-content ml-16'>
 <nav class="bg-zinc-900	 fixed w-full px-5 z-20 top-0 start-0  border-b-2 border-gray-700 shadow-md">
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
                                <a href="/production"  class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Production</a>
                            </li>
                            <li>
                                <a href="/funding" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Funding</a>
                            </li>
                            <li>
                                <a href="/distribution" class="block  py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-white md:p-0  font-semibold md:font-normal  md:dark:text-white " aria-current="page">Distribution</a>
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
                                <a href="/contact" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 text-[#e2c8b7] md:hover:text-white  hover:text-white ">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
      > */}
   
      <h1 class="mb-4 text-4xl font-extrabold leading-9 mt-10 	tracking-wide	 text-gray-900 md:text-5xl lg:text-6xl">
        Distributing by
        <span class="text-yellow-600 ">  KVN</span></h1>
      <p class="text-lg font-normal text-gray-500 lg:text-xl ">You may find a Film Production House but it's not easy to find a Film Distribution Company. KVN Productions is here to prove it wrong.

        Here are a few movies distributed by KVN Productions.</p>


      <div class="flex  gap-10 mt-5 justify-evenly">
        <div>
          <Image onClick={onOpenModal1} isZoomed class="h-auto max-w-full rounded-lg cursor-pointer" src="https://i.postimg.cc/QNk92NtF/sakath.png" alt="" />
          <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Sakath</figcaption>
          <Modal
            backdrop="opaque"
            isOpen={isOpenModal1}
            size="4xl"
            width='100%'
            onOpenChange={onOpenChange1}
            classNames={{
              backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
            }}
          >
            <ModalContent>
              {(onCloseModal1) => (
                <>
                  <div className='event_modal'>
                    <Image
                      showSkeleton
                      src="https://i.postimg.cc/QNk92NtF/sakath.png"
                      width={4000}
                      height={490}

                    />
                    <div >
                      <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">RRR</ModalHeader>
                      <ModalBody>
                        <h2 id="modal-description" >
                          <h1 className='font-bold'>Action/ Drama | 2022</h1> <br />

                          <p className='font-semibold text-2xl lg:text-3xl tracking-wide	leading-8  lg:leading-9 '>A tale of two legendary revolutionaries and their journey far away from home.</p>

                        </h2>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onCloseModal1}>
                          Close
                        </Button>
                        <a href="https://www.youtube.com/embed/L1KYlnMRtqc?si=6YrIK_pP2JP7y1CB"><Button color="primary">
                          watch
                        </Button></a>
                      </ModalFooter>
                    </div>
                  </div>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <Image onClick={onOpenModal2} isZoomed class="h-auto max-w-full rounded-lg" src="https://i.postimg.cc/W1fX0wcc/Untitled-4.png" alt="" />
          <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">By 2 Love</figcaption>
          <Modal
            backdrop="opaque"
            isOpen={isOpenModal2}
            size="4xl"
            width='100%'
            onOpenChange={onOpenChange2}
            classNames={{
              backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
            }}
          >
            <ModalContent>
              {(onCloseModal2) => (
                <>
                  <div className='event_modal'>
                    <Image
                      showSkeleton
                      src="https://i.postimg.cc/W1fX0wcc/Untitled-4.png"
                      width={4000}
                      height={490}

                    />
                    <div >
                      <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">RRR</ModalHeader>
                      <ModalBody>
                        <h2 id="modal-description" >
                          <h1 className='font-bold'>Action/ Drama | 2022</h1> <br />

                          <p className='font-semibold text-2xl lg:text-3xl tracking-wide	leading-8  lg:leading-9 '>A tale of two legendary revolutionaries and their journey far away from home.</p>

                        </h2>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onCloseModal2}>
                          Close
                        </Button>
                        <a href="https://www.youtube.com/embed/L1KYlnMRtqc?si=6YrIK_pP2JP7y1CB"><Button color="primary">
                          watch
                        </Button></a>
                      </ModalFooter>
                    </div>
                  </div>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <Image onClick={onOpenModal3} isZoomed class="h-auto max-w-full rounded-lg" src="https://i.postimg.cc/W1fX0wcc/Untitled-4.png" alt="" />
          <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">By 2 Love</figcaption>
          <Modal
            backdrop="opaque"
            isOpen={isOpenModal3}
            size="4xl"
            width='100%'
            onOpenChange={onOpenChange3}
            classNames={{
              backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
            }}
          >
            <ModalContent>
              {(onCloseModal3) => (
                <>
                  <div className='event_modal'>
                    <Image
                      showSkeleton
                      src="https://i.postimg.cc/W1fX0wcc/Untitled-4.png"
                      width={4000}
                      height={490}

                    />
                    <div >
                      <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">RRR</ModalHeader>
                      <ModalBody>
                        <h2 id="modal-description" >
                          <h1 className='font-bold'>Action/ Drama | 2022</h1> <br />

                          <p className='font-semibold text-2xl lg:text-3xl tracking-wide	leading-8  lg:leading-9 '>A tale of two legendary revolutionaries and their journey far away from home.</p>

                        </h2>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onCloseModal3}>
                          Close
                        </Button>
                        <a href="https://www.youtube.com/embed/L1KYlnMRtqc?si=6YrIK_pP2JP7y1CB"><Button color="primary">
                          watch
                        </Button></a>
                      </ModalFooter>
                    </div>
                  </div>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div>
          <Image onClick={onOpenModal4} isZoomed class="h-auto max-w-full rounded-lg" src="https://i.postimg.cc/W1fX0wcc/Untitled-4.png" alt="" />
          <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">By 2 Love</figcaption>
          <Modal
            backdrop="opaque"
            isOpen={isOpenModal4}
            size="4xl"
            width='100%'
            onOpenChange={onOpenChange4}
            classNames={{
              backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
            }}
          >
            <ModalContent>
              {(onCloseModal4) => (
                <>
                  <div className='event_modal'>
                    <Image
                      showSkeleton
                      src="https://i.postimg.cc/W1fX0wcc/Untitled-4.png"
                      width={4000}
                      height={490}

                    />
                    <div >
                      <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">RRR</ModalHeader>
                      <ModalBody>
                        <h2 id="modal-description" >
                          <h1 className='font-bold'>Action/ Drama | 2022</h1> <br />

                          <p className='font-semibold text-2xl lg:text-3xl tracking-wide	leading-8  lg:leading-9 '>A tale of two legendary revolutionaries and their journey far away from home.</p>

                        </h2>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onCloseModal4}>
                          Close
                        </Button>
                        <a href="https://www.youtube.com/embed/L1KYlnMRtqc?si=6YrIK_pP2JP7y1CB"><Button color="primary">
                          watch
                        </Button></a>
                      </ModalFooter>
                    </div>
                  </div>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>

      </div>

      {/* </motion.div> */}
    </div>
    </div>
  )
}

export default Distribution