import React from 'react'
import { Image } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

function Production() {
    const { isOpen: isOpenModal1, onOpen: onOpenModal1, onOpenChange: onOpenChange1 } = useDisclosure();
    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onOpenChange: onOpenChange2 } = useDisclosure();
    return (
        <div className='mt-52 bg-white box-content ml-16'>



            <h1 class="mb-4 text-4xl font-extrabold leading-9 mt-10 	tracking-wide	 text-gray-900 md:text-5xl lg:text-6xl">Productions Under <span class="text-yellow-600 ">  KVN</span></h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl ">Here are a few of our 'Best Quality Kannada Movies' with a vision to entertain the Kannada Audience.</p>


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

                                                    <p className='font-semibold text-3xl tracking-wide	leading-9 '>A tale of two legendary revolutionaries and their journey far away from home.</p>

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

                                                    <p className='font-semibold text-3xl tracking-wide	leading-9 '>A tale of two legendary revolutionaries and their journey far away from home.</p>

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

            </div>


        </div>
    )
}

export default Production