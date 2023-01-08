import logo from './logo.svg';
import './App.css';
import { Box, Badge, Container, Image, Button, Flex, Stack, HStack, VStack} from '@chakra-ui/react'
import { Component } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { useTheme, useColorMode } from '@chakra-ui/react'
import { theme } from "./containers/theme" 
import {CallToActionWithAnnotation, FilterMenu, PlayerTable, PositionCheckBox, SubmitButton } from "./components"


function MyButton() {
  const theme = useTheme()
  return <button style={{ backgroundColor: theme.colors.primary }}>Click me!</button>
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
    <ChakraProvider colorMode="dark" theme={theme}>
      <CallToActionWithAnnotation width="100%"></CallToActionWithAnnotation>
      <Container
       maxW='6xl'
       rounded='lg'
       border='1px' borderColor='gray.200'
       bg='gray.50' 
      >
        <PositionCheckBox></PositionCheckBox>
        <SubmitButton></SubmitButton>
      </Container>
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