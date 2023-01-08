import { Select, useTheme, Container, Text, VStack, StackDivider } from '@chakra-ui/react'

export default function TeamDropdown() {
    const theme = useTheme()
    return (
        <Container>
            <VStack divider={<StackDivider borderColor='black.200' />}>
                <Text mb="0" mt="2.5">NBA Teams:</Text>
                <Select style={{ backgroundColor: theme.colors.white }} size='sm' placeholder='Select a team'>
                    <option value='option1'>Los Angeles Lakers</option>
                    <option value='option2'>Milwaukee Bucks</option>
                    <option value='option3'>Indiana Pacers</option>
                </Select>
            </VStack>
        </Container>
      
    )
   
}