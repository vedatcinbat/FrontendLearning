"use client"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
} from '@chakra-ui/react'

export default function TransitionModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        isCentered
        motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
                You can scroll the content behind the modal
              </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni ab enim
                    commodi quibusdam reiciendis delectus blanditiis architecto minima suscipit
                    cupiditate doloremque incidunt fugiat dolor, explicabo inventore ad iusto
                    neque.
                </Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }