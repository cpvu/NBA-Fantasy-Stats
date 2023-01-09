import { Button, Fade, ScaleFade, Slide, SlideFade, useDisclosure, onToggle, Center, Container, VStack } from '@chakra-ui/react'
import PlayerTable from "./table"

export default function SubmitButton() {
    const { isOpen, onToggle } = useDisclosure()

    return (
       <Center>
        <VStack>
        {isOpen ? <Button colorScheme='orange' mt = "40px" mb="10px" size="lg">Submit</Button> : <Button onClick={onToggle} colorScheme='orange' mt = "40px" mb="10px" size="lg">Submit</Button>}
            <ScaleFade initialScale={0.9} in={isOpen}>
                <Container maxW="90%" rounded='lg' border='1px' borderColor='gray.300' bg="gray.200" my={{ base: 10, md: 10}}>
                    <PlayerTable></PlayerTable>
                </Container>
            </ScaleFade>
        </VStack>
           
       </Center>
     
    

    )
}