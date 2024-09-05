"use client"

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

type ScrollBehavior = "inside" | "outside";

export default function ScrollingExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] =
    React.useState<ScrollBehavior>("inside");

  const btnRef = React.useRef(null);

  return (
    <>
      <RadioGroup
        value={scrollBehavior}
        onChange={(nextValue: string) => setScrollBehavior(nextValue as ScrollBehavior)}
      >
        <Stack direction="row">
          <Radio value="inside">inside</Radio>
          <Radio value="outside">outside</Radio>
        </Stack>
      </RadioGroup>

      <Button mt={3} ref={btnRef} onClick={onOpen}>
        Trigger modal
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus porro recusandae praesentium, nesciunt nam, voluptates eos libero eveniet quam mollitia explicabo quas corporis! Suscipit eveniet ducimus laudantium. Molestiae perferendis cumque nostrum repudiandae eum minima beatae porro omnis saepe quisquam, veniam voluptates asperiores qui delectus dignissimos ea, corrupti eveniet quo! Provident, velit voluptatibus! Ipsum eveniet quidem vel. Asperiores, modi. Optio sequi veniam libero, ullam voluptatibus neque, quaerat est nihil laboriosam corporis nobis placeat maxime ipsum odit? Distinctio consequuntur minus non culpa illum temporibus, odio, ratione aut quaerat cupiditate maxime vero obcaecati ullam iure sed in blanditiis qui quas quae! Non nulla tempore numquam dolorum saepe quas animi, facere odit consequatur exercitationem iure suscipit quo eveniet aspernatur. Placeat eum, sapiente eveniet fugit, architecto, excepturi fuga velit deserunt voluptas qui neque id explicabo debitis tempore commodi ea provident quisquam soluta. Voluptates, molestias, doloremque id eaque est necessitatibus quas laborum ad dolorum iure eum, quidem exercitationem autem nisi! Voluptatibus sint facere, expedita delectus officiis reprehenderit rerum odit? Consequuntur, fugiat! Itaque nesciunt libero cumque et doloremque aut deleniti consectetur, molestias vitae labore ab ut rerum saepe ullam perspiciatis nam explicabo earum. Laborum corrupti architecto maxime ducimus ut, deserunt earum libero quod reiciendis mollitia ullam tempora consectetur nobis sit nesciunt non! Officiis id magnam consequuntur alias illum. Rerum eius aspernatur porro, repellendus, laboriosam quia, sit placeat non reprehenderit rem obcaecati provident maiores error laudantium magni exercitationem incidunt quidem sed possimus perspiciatis. Error cum vitae dolore corporis ut perspiciatis quibusdam, omnis voluptatum laborum recusandae voluptatem molestiae beatae repellat dolorum aliquid accusamus excepturi suscipit doloremque fugit eaque porro. Ipsam dolorum blanditiis cupiditate velit officia aliquam nihil perspiciatis ab corrupti! Ullam explicabo nesciunt assumenda tempora odit alias magnam nam, repudiandae consequuntur inventore quidem provident consequatur doloremque dignissimos maxime, architecto natus quod cupiditate! Labore dignissimos dolorum facilis id fuga?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
