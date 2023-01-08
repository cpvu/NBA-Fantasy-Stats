import logo from './logo.svg';
import './App.css';
import { Box, Container, Image, Center, Button, Flex, Stack, HStack, VStack, Grid, GridItem, Text} from '@chakra-ui/react'
import { Component } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { useTheme, useColorMode } from '@chakra-ui/react'
import {stats, positions } from "./containers/constants"
import {CallToActionWithAnnotation, FilterMenu, PlayerTable, PositionCheckBox, SubmitButton, TeamDropdown } from "./components"


function MyButton() {
  const theme = useTheme()
  return <button style={{ backgroundColor: theme.colors.discord }}>Click me!</button>
}

function Example() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  )
}

function App() {
  return (
    <ChakraProvider>
      <CallToActionWithAnnotation width="100%"></CallToActionWithAnnotation>
      <Container
          maxW={{base: "60%", md: "90%", }}
          rounded='lg'
          border='1px' borderColor='gray.300'
          bg="gray.50"
          pb="19"
          >
          <Grid templateColumns='repeat(3, 1fr)' gap={5}>
            <GridItem><PositionCheckBox title="Position" checkboxValue={positions}></PositionCheckBox></GridItem>
            <GridItem><PositionCheckBox title="Stats" checkboxValue={stats}></PositionCheckBox></GridItem>
            <GridItem><TeamDropdown></TeamDropdown></GridItem>
          </Grid>
      </Container>
      <Center>
        <SubmitButton></SubmitButton>
      </Center>
      
      <Container
          maxW='6xl'
          rounded='lg'
          border='1px' borderColor='gray.200'
          bg='gray.50'
          my={{ base: 10, md: 10}}>
        <PlayerTable></PlayerTable>
      </Container>

      <Stack direction={['column', 'row']} spacing = "100px;">
      </Stack>
    </ChakraProvider>
  )
}

export default App