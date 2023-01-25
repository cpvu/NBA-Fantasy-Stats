import './App.css';
import React from "react";
import { Container, Center, Button, Stack, Grid, GridItem} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { useTheme, useColorMode } from '@chakra-ui/react'
import {stats, positions } from "./containers/constants"
import {MainPageHeader, CallToActionWithAnnotation, PlayerTable, PositionCheckBox, SubmitButton, TeamDropdown, WithSubnavigation } from "./components"
import { extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  components: {
    Checkbox: {
      baseStyle: {
        container: {
          touchAction: 'none',
        },
        label: {
          pointerEvents: "none",
        },
        control: {
          bg: "white",
          borderRadius: 9,
          borderColor: "gray",
          border: "1px",
          _checked: {
          }
        }
      }
    },
  }
});



function App() {
  const [checkedItems, setCheckedItems] = React.useState([]);

  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation></WithSubnavigation>
      <MainPageHeader title="PBCC NBA Basketball Fantasy Tracker"></MainPageHeader>
      <CallToActionWithAnnotation width="100%"></CallToActionWithAnnotation>
      <Container
          maxW={{base: "60%", md: "90%", }}
          rounded='lg'
          border='1px' borderColor='gray.300'
          bg="gray.200"
          pb="19"
          >
          <Grid templateColumns='repeat(3, 1fr)' gap={5}>
            <GridItem><PositionCheckBox checkedItems = {checkedItems} setCheckedItems = {setCheckedItems} title="Position" checkboxValue={positions}></PositionCheckBox></GridItem>
            <GridItem><PositionCheckBox checkedItems = {checkedItems} setCheckedItems = {setCheckedItems} title="Stats" checkboxValue={stats}></PositionCheckBox></GridItem>
            <GridItem><TeamDropdown></TeamDropdown></GridItem>
          </Grid>
      </Container>
      <SubmitButton checkedItems = {checkedItems}></SubmitButton>
    </ChakraProvider>
  )
}

export default App