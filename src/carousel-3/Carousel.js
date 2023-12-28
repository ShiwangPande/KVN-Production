// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import "swiper/css";
import { Image } from "@nextui-org/react";
import image1 from "./image-1.jpg";
import image2 from "./image-2.jpg";
import image3 from "./image-3.jpg";
import image4 from "./image-4.jpeg";
import image5 from "./image-5.jpeg";
import image6 from "./image-6.jpg";
import image7 from "./image-7.jpg";

// import { Card, Col, Text } from "@nextui-org/react";
// const slides = [image1, image2, image3, image4, image6, image7];
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Carousel() {
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onOpenChange: onOpenChange1 } = useDisclosure();
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onOpenChange: onOpenChange2 } = useDisclosure();
  const { isOpen: isOpenModal3, onOpen: onOpenModal3, onOpenChange: onOpenChange3 } = useDisclosure();
  const { isOpen: isOpenModal4, onOpen: onOpenModal4, onOpenChange: onOpenChange4 } = useDisclosure();
  const { isOpen: isOpenModal5, onOpen: onOpenModal5, onOpenChange: onOpenChange5 } = useDisclosure();
  const { isOpen: isOpenModal6, onOpen: onOpenModal6, onOpenChange: onOpenChange6 } = useDisclosure();
  const { isOpen: isOpenModal7, onOpen: onOpenModal7, onOpenChange: onOpenChange7 } = useDisclosure();

  const CustomCloseButton = ({ onClose }) => (
    <button onClick={onClose} className="next-close">
      <svg width="40px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns">

        <title>cross-circle</title>
        <desc>Created with Sketch Beta.</desc>
        <defs>

        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketchType="MSPage">
          <g id="Icon-Set" sketchType="MSLayerGroup" transform="translate(-568.000000, -1087.000000)" fill="#000000" >
            <path d="M584,1117 C576.268,1117 570,1110.73 570,1103 C570,1095.27 576.268,1089 584,1089 C591.732,1089 598,1095.27 598,1103 C598,1110.73 591.732,1117 584,1117 L584,1117 Z M584,1087 C575.163,1087 568,1094.16 568,1103 C568,1111.84 575.163,1119 584,1119 C592.837,1119 600,1111.84 600,1103 C600,1094.16 592.837,1087 584,1087 L584,1087 Z M589.717,1097.28 C589.323,1096.89 588.686,1096.89 588.292,1097.28 L583.994,1101.58 L579.758,1097.34 C579.367,1096.95 578.733,1096.95 578.344,1097.34 C577.953,1097.73 577.953,1098.37 578.344,1098.76 L582.58,1102.99 L578.314,1107.26 C577.921,1107.65 577.921,1108.29 578.314,1108.69 C578.708,1109.08 579.346,1109.08 579.74,1108.69 L584.006,1104.42 L588.242,1108.66 C588.633,1109.05 589.267,1109.05 589.657,1108.66 C590.048,1108.27 590.048,1107.63 589.657,1107.24 L585.42,1103.01 L589.717,1098.71 C590.11,1098.31 590.11,1097.68 589.717,1097.28 L589.717,1097.28 Z" id="cross-circle" sketchType="MSShapeGroup">

            </path>
          </g>
        </g>
      </svg>
    </button>
  );
  return (
    <div className="carousel">  <Swiper spaceBetween={10} loop
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper3">

      <SwiperSlide className="swiper-wrapper3">
        <div onClick={onOpenModal1} style={{ cursor: "pointer" }}>
          <Image
            isZoomed
            className="slide_img"
            width={1000}
            alt="NextUI Fruit Image with Zoom"
            src={image5}
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
                  <CustomCloseButton onClose={onCloseModal1} />
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
      <SwiperSlide className="swiper-wrapper3">
        <div onClick={onOpenModal2} style={{ cursor: "pointer" }}>
          <Image
            isZoomed
            className="slide_img"
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
                  <CustomCloseButton onClose={onCloseModal2} />
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
                      <Button color="primary">
                        watch
                      </Button>
                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
      </SwiperSlide>
      <SwiperSlide className="swiper-wrapper3">
        <div onClick={onOpenModal3} style={{ cursor: "pointer" }}>
          <Image
            isZoomed
            className="slide_img"
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
                  <CustomCloseButton onClose={onCloseModal3} />
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
                      <Button color="primary">
                        watch
                      </Button>
                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
      </SwiperSlide>
      <SwiperSlide className="swiper-wrapper3">
        <div onClick={onOpenModal4} style={{ cursor: "pointer" }}>
          <Image
            isZoomed
            className="slide_img"
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
                  <CustomCloseButton onClose={onCloseModal4} />
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
                      <Button color="primary">
                        watch
                      </Button>
                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
      </SwiperSlide>
      <SwiperSlide className="swiper-wrapper3">
        <div onClick={onOpenModal5} style={{ cursor: "pointer" }}>
          <Image
            isZoomed
            className="slide_img"
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
                  <CustomCloseButton onClose={onCloseModal5} />
                  <Image
                    showSkeleton
                    src={image5}
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
                      <Button color="primary">
                        watch
                      </Button>
                    </ModalFooter>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
      </SwiperSlide>


    </Swiper></div>
  )
}

export default Carousel