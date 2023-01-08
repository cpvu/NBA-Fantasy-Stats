import { Divider, Center } from '@chakra-ui/react'

export default function PageDivider() {
    return (
        <Center
        py={{ base: 20, md: 3 }}>
            <Divider orientation='horizontal' w="90%" h="2px" />
        </Center>
        
    )
}