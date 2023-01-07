import logo from './logo.svg';
import './App.css';
import { Box, Badge, Image, Button, Flex, Stack, HStack, VStack} from '@chakra-ui/react'
import { Component } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { useTheme, useColorMode } from '@chakra-ui/react'
import { theme } from "./containers/theme" 
import CallToActionWithAnnotation from './components/Hero';
import Success from './components/results'


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
      <Success></Success>
      <Stack direction={['column', 'row']} spacing = "100px;">
      </Stack>
  
      
    </ChakraProvider>
  )
}

export default App