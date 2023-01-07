import logo from './logo.svg';
import './App.css';
import { Box, Badge, Image, Button, Flex, Stack, HStack, VStack} from '@chakra-ui/react'
import { Component } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { useTheme, useColorMode } from '@chakra-ui/react'
import { theme } from "./containers/theme" 


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
    
    <Stack direction={['column', 'row']} spacing = "100px;">
      <Example ></Example>
      <MyButton></MyButton>
      <MyButton ml= "500px"></MyButton>
    </Stack>
  
      
    </ChakraProvider>
  )
}

export default App