import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Navbar from '../Navbar'
import Carousel from '../carousel-3/Carousel'
import Carousel1 from '../Components/Carousel2'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

// import required modules
import { Pagination } from 'swiper/modules';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

function Home() {
    const { isOpen: isOpenModal1, onOpen: onOpenModal1, onOpenChange: onOpenChange1 } = useDisclosure();
    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onOpenChange: onOpenChange2 } = useDisclosure();
    const { isOpen: isOpenModal3, onOpen: onOpenModal3, onOpenChange: onOpenChange3 } = useDisclosure();
    const { isOpen: isOpenModal4, onOpen: onOpenModal4, onOpenChange: onOpenChange4 } = useDisclosure();
    const { isOpen: isOpenModal5, onOpen: onOpenModal5, onOpenChange: onOpenChange5 } = useDisclosure();
    const { isOpen: isOpenModal6, onOpen: onOpenModal6, onOpenChange: onOpenChange6 } = useDisclosure();
    const { isOpen: isOpenModal7, onOpen: onOpenModal7, onOpenChange: onOpenChange7 } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    return (
        <div className="home">
            {/* <Navbar /> */}
            <Carousel />
            <div className="mx-10">

                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <a href="/" class="inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="/distribution" class="ms-1 text-lg font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Distribution</a>
                            </div>
                        </li>

                    </ol>
                </nav>
            </div>

            <Carousel1 />
            <div className="mx-10">

                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center">
                            <a href="/" class="inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="/about-us" class="ms-1 text-lg font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">About Us</a>
                            </div>
                        </li>

                    </ol>
                </nav>
            </div>
            <Card className="mx-0 md:mx-80 my-0 lg:my-36  backdrop-blur-xl bg-white/70">
                <CardHeader className="pb-0 pt-2 px-4 flex-col flex items-center">
                    <h4 className="font-extrabold mt-5  text-5xl">About KVN Productions</h4>
                </CardHeader>
                <CardBody>

                    <p className="text-xl mx-5 my-5 text-justify antialiased hover:subpixel-antialiased leading-8 tracking-wide font-serif	">
                        KVN Productions is one of the most prestigious film production, funding and Distribution company based in Bangalore. The company was founded by Mr. Venkat K Narayana (KVN)  and Mrs. Nisha Venkat with an ambition to showcase world-class films to the people of Karnataka. Through KVN Productions, we aim to unearth hidden talents who are waiting to showcase their artistic prowess. This, in turn, would generate extensive employment opportunities to many deserving talents across the state.
                    </p>
                </CardBody>
            </Card>

            <div id="indicators-carousel" class="relative w-full my-10" data-carousel="static">

                <div class="relative h-[70vh] overflow-hidden rounded-lg md:h-[70vh]">
                    <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                        <SwiperSlide>   <section class="bg-center  bg-no-repeat bg-cover w-full h-auto lg:w-[100vw]  lg:h-[80vh] bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
                            <div class="px-4 mx-auto max-w-screen-2xl text-center py-24 lg:py-56">
                                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">KAATERA Official 4K Trailer</h1>
                                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
                                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

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
                                                            <h1 className='font-bold'>KVN PRODUCTIONS 2:48</h1> <br />

                                                            <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! KVN Productions presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for KVN Productions. Stay tuned for more!!!
                                                                ----------------------------------------------
                                                                Turn on Subtitles in Your Preferred Language.

                                                                #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                                                                ----------------------------------------------
                                                                ♫ Movie               :  KD - The Devil
                                                                ♫ Banner             : KVN Productions
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
                            </Modal></SwiperSlide>
                        <SwiperSlide> <section class="bg-center  bg-no-repeat bg-cover w-full h-auto lg:w-[100vw]  lg:h-[80vh] bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
                            <div class="px-4 mx-auto max-w-screen-2xl text-center py-24 lg:py-56">
                                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">KAATERA Official 4K Trailer</h1>
                                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
                                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

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
                                                            <h1 className='font-bold'>KVN PRODUCTIONS 2:48</h1> <br />

                                                            <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! KVN Productions presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for KVN Productions. Stay tuned for more!!!
                                                                ----------------------------------------------
                                                                Turn on Subtitles in Your Preferred Language.

                                                                #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                                                                ----------------------------------------------
                                                                ♫ Movie               :  KD - The Devil
                                                                ♫ Banner             : KVN Productions
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
                            </Modal></SwiperSlide>
                        <SwiperSlide>    <section class="bg-center  bg-no-repeat bg-cover w-full h-auto lg:w-[100vw]  lg:h-[80vh] bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
                            <div class="px-4 mx-auto max-w-screen-2xl text-center py-24 lg:py-56">
                                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">KAATERA Official 4K Trailer</h1>
                                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
                                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

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
                                                            <h1 className='font-bold'>KVN PRODUCTIONS 2:48</h1> <br />

                                                            <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! KVN Productions presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for KVN Productions. Stay tuned for more!!!
                                                                ----------------------------------------------
                                                                Turn on Subtitles in Your Preferred Language.

                                                                #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                                                                ----------------------------------------------
                                                                ♫ Movie               :  KD - The Devil
                                                                ♫ Banner             : KVN Productions
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
                            </Modal></SwiperSlide>
                        <SwiperSlide> <section class="bg-center  bg-no-repeat bg-cover w-full h-auto lg:w-[100vw]  lg:h-[80vh] bg-[url('https://i.postimg.cc/fLYhdXYv/sddefault.jpg')] bg-gray-700 bg-blend-multiply">
                            <div class="px-4 mx-auto max-w-screen-2xl text-center py-24 lg:py-56">
                                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">KAATERA Official 4K Trailer</h1>
                                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
                                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

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
                                                            <h1 className='font-bold'>KVN PRODUCTIONS 2:48</h1> <br />

                                                            <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! KVN Productions presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for KVN Productions. Stay tuned for more!!!
                                                                ----------------------------------------------
                                                                Turn on Subtitles in Your Preferred Language.

                                                                #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                                                                ----------------------------------------------
                                                                ♫ Movie               :  KD - The Devil
                                                                ♫ Banner             : KVN Productions
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
                            </Modal></SwiperSlide>
                        <SwiperSlide>    <section class="bg-center  bg-no-repeat bg-cover w-full h-auto lg:w-[100vw]  lg:h-[80vh] bg-[url('https://picsum.photos/640/360')] bg-gray-700 bg-blend-multiply">
                            <div class="px-4 mx-auto max-w-screen-2xl text-center py-24 lg:py-56">
                                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">KAATERA Official 4K Trailer</h1>
                                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Presenting the KAATERA Official 4K Trailer Starring: Challenging ⭐" Darshan, Aradhanaa, Jagapathi Babu & Others Exclusive Only On Anand Audio Official Youtube Channel..!!! </p>
                                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

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
                                                            <h1 className='font-bold'>KVN PRODUCTIONS 2:48</h1> <br />

                                                            <p className='font-semibold text-lg tracking-wide 	leading-9 '>KD Title Teaser is here! KVN Productions presents the Title Teaser of KD - The Devil. Showman Prem's directorial manoeuvre #KD features action prince Dhruva Sarja in the lead. Magical composer Arjun Janya has composed the music for this pan India action flick for KVN Productions. Stay tuned for more!!!
                                                                ----------------------------------------------
                                                                Turn on Subtitles in Your Preferred Language.

                                                                #kdtitleteaser #kvn #prems #actionprince #dhruvasarja #kvnproductions #arjunjanya
                                                                ----------------------------------------------
                                                                ♫ Movie               :  KD - The Devil
                                                                ♫ Banner             : KVN Productions
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
                            </Modal></SwiperSlide>
                    </Swiper>









                </div>



                {/* <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                        <svg class="w-4 h-4 text-white  rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
                        <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button> */}
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/L1KYlnMRtqc?si=6YrIK_pP2JP7y1CB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            {/* <div>
                
            </div> */}



        </div>
    )
}

export default Home