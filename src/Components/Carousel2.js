import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CaroselStyle.css';
import { Navigation } from 'swiper/modules';
// import required modules
import { EffectCoverflow, Pagination, } from 'swiper/modules';
import { Image } from "@nextui-org/react";
import image1 from "./image-1.jpg";
import image2 from "./image-2.jpg";
import image3 from "./image-3.jpg";
import image4 from "./image-4.jpeg";
import image5 from "./image-5.jpeg";
// import image6 from "./image-6.jpg";
// import image7 from "./image-7.jpg";
export default function App() {
    const { isOpen: isOpenModal1, onOpen: onOpenModal1, onOpenChange: onOpenChange1 } = useDisclosure();
    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onOpenChange: onOpenChange2 } = useDisclosure();
    const { isOpen: isOpenModal3, onOpen: onOpenModal3, onOpenChange: onOpenChange3 } = useDisclosure();
    const { isOpen: isOpenModal4, onOpen: onOpenModal4, onOpenChange: onOpenChange4 } = useDisclosure();
    const { isOpen: isOpenModal5, onOpen: onOpenModal5, onOpenChange: onOpenChange5 } = useDisclosure();
    const { isOpen: isOpenModal6, onOpen: onOpenModal6, onOpenChange: onOpenChange6 } = useDisclosure();
    const { isOpen: isOpenModal7, onOpen: onOpenModal7, onOpenChange: onOpenChange7 } = useDisclosure();
    const { isOpen: isOpenModal8, onOpen: onOpenModal8, onOpenChange: onOpenChange8 } = useDisclosure();
    return (
        <>
            <Swiper loop
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                navigation={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper1"
            >
                <SwiperSlide className='slides'>
                    <div onClick={onOpenModal1} style={{ cursor: "pointer" }}>
                        <Image
                            isZoomed
                            // className="slide_img"
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src={image1}
                        />
                    </div>
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
                                            src={image1}
                                            width={4000}
                                            height={490}

                                        />
                                        <div >
                                            <ModalHeader className="flex flex-col gap-1 text-5xl  font-bold">RRR</ModalHeader>
                                            <ModalBody>
                                                <h2 id="modal-description" >
                                                    <h1 className='font-bold'>asd/ Drama | 2022</h1> <br />

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
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <div onClick={onOpenModal2} style={{ cursor: "pointer" }}>
                        <Image
                            isZoomed
                            // className="slide_img"
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src={image2}
                        />
                    </div>
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
                                            src={image2}
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
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <div onClick={onOpenModal3} style={{ cursor: "pointer" }}>
                        <Image
                            isZoomed
                            // className="slide_img"
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src={image3}
                        />
                    </div>
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
                                            src={image3}
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
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <div onClick={onOpenModal4} style={{ cursor: "pointer" }}>
                        <Image
                            isZoomed
                            // className="slide_img"
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src={image4}
                        />
                    </div>
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
                                            src={image4}
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
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <div onClick={onOpenModal5} style={{ cursor: "pointer" }}>
                        <Image
                            isZoomed
                            // className="slide_img"
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src={image5}
                        />
                    </div>
                    <Modal
                        backdrop="opaque"
                        isOpen={isOpenModal5}
                        size="4xl"
                        width='100%'
                        onOpenChange={onOpenChange5}
                        classNames={{
                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                        }}
                    >
                        <ModalContent>
                            {(onCloseModal5) => (
                                <>
                                    <div className='event_modal'>
                                        <Image
                                            showSkeleton
                                            src={image4}
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
                                                <Button color="danger" variant="light" onPress={onCloseModal5}>
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
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <div onClick={onOpenModal6} style={{ cursor: "pointer" }}>
                        <Image
                            isZoomed
                            // className="slide_img"
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src={image2}
                        />
                    </div>
                    <Modal
                        backdrop="opaque"
                        isOpen={isOpenModal6}
                        size="4xl"
                        width='100%'
                        onOpenChange={onOpenChange6}
                        classNames={{
                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                        }}
                    >
                        <ModalContent>
                            {(onCloseModal6) => (
                                <>
                                    <div className='event_modal'>
                                        <Image
                                            showSkeleton
                                            src={image2}
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
                                                <Button color="danger" variant="light" onPress={onCloseModal6}>
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
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <div onClick={onOpenModal7} style={{ cursor: "pointer" }}>
                        <Image
                            isZoomed
                            // className="slide_img"
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src={image3}
                        />
                    </div>
                    <Modal
                        backdrop="opaque"
                        isOpen={isOpenModal7}
                        size="4xl"
                        width='100%'
                        onOpenChange={onOpenChange7}
                        classNames={{
                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                        }}
                    >
                        <ModalContent>
                            {(onCloseModal7) => (
                                <>
                                    <div className='event_modal'>
                                        <Image
                                            showSkeleton
                                            src={image3}
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
                                                <Button color="danger" variant="light" onPress={onCloseModal7}>
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
                </SwiperSlide>
                <SwiperSlide className='slides'>
                    <div onClick={onOpenModal8} style={{ cursor: "pointer" }}>
                        <Image
                            isZoomed
                            // className="slide_img"
                            width={1000}
                            alt="NextUI Fruit Image with Zoom"
                            src={image4}
                        />
                    </div>
                    <Modal
                        backdrop="opaque"
                        isOpen={isOpenModal8}
                        size="4xl"
                        width='100%'
                        onOpenChange={onOpenChange8}
                        classNames={{
                            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                        }}
                    >
                        <ModalContent>
                            {(onCloseModal8) => (
                                <>
                                    <div className='event_modal'>
                                        <Image
                                            showSkeleton
                                            src={image4}
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
                                                <Button color="danger" variant="light" onPress={onCloseModal8}>
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
                </SwiperSlide>



            </Swiper>
        </>
    );
}
