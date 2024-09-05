import { Button, Box, Text } from "@chakra-ui/react";
import BasicUsage from "./components/BasicUsage";
import ModalScroll from "./components/ModalScroll";
import ManualClose from "./components/ManualClose";
import TransitionModal from "./components/TransitionModal";
import ScrollingExample from "./components/ScrollingModal";

export default function Page() {
    return (
        <div className="min-h-[150vh]">
            <h2>Chakra UI Components</h2>
            <Box className="p-8 bg-gray-50 flex justify-center items-center">
                <Text fontSize="2xl" className="text-blue-500">
                    Welcome to Chakra + Tailwind
                </Text>
                <Button colorScheme="blue" className="ml-4">
                    Chakra Button
                </Button>
            </Box>

            <h2>Basic Modal Usage</h2>
            <BasicUsage />

            <h2>Block Scrolling when Model open</h2>
            <ModalScroll />

            <h2>Manuel Close</h2>
            <ManualClose />

            <h2>Transition Modal - SlideInBottom/IsCentered Modal</h2>
            <TransitionModal />

            <h2>Scrolling Example</h2>
            <ScrollingExample />
        </div>
    )
}