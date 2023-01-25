import React from 'react'
import { Button, Fade, ScaleFade, Slide, SlideFade, useDisclosure, onToggle, Center, Container, VStack } from '@chakra-ui/react'
import PlayerTable from "./table"

export default function SubmitButton(props) {
    const { isOpen, onToggle } = useDisclosure()

    const [ playerInformation, setPlayerInformation ] = React.useState([]); 
    
    function checktest() {
        console.log(props.checkedItems)
        fetch("http://localhost:8000/message", {
            method: 'POST',
            body: JSON.stringify(props.checkedItems),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setPlayerInformation(data))
        .catch(error => console.log(error));
    }

    return (
       <Center>
        <VStack>
        <form>
            {isOpen ? <Button onClick={checktest} colorScheme='orange' mt = "40px" mb="10px" size="lg">Submit</Button> : <Button onClick={() => {checktest(); onToggle();}} colorScheme='orange' mt = "40px" mb="10px" size="lg">Submit</Button>}
        </form>
            <ScaleFade initialScale={0.9} in={isOpen}>
                <Container maxW="90%" rounded='lg' border='1px' borderColor='gray.300' bg="gray.200" my={{ base: 10, md: 10}}>
                    <PlayerTable playerInfo={playerInformation} ></PlayerTable>
                </Container>
            </ScaleFade>
        </VStack>
           
       </Center>
    )
}