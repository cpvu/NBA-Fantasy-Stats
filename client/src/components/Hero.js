import {
    Box,
    Container,
    Text,
    Button,
    Heading,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
  } from '@chakra-ui/react';
  
  import PageDivider from './divider';
  
  export default function CallToActionWithAnnotation() {
    return (
      <>
          <Stack
            textAlign={'center'}
            spacing={{ base: 8, md: 5 }}
            py={{ base: 100, md: 6 }}>
            <Heading
                fontFamily={"Roboto"}
                letterSpacing= {1.5}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
                lineHeight={'110%'}>
                PBCC NBA Basketball Fantasy Tracker<br />
                
                <PageDivider></PageDivider>
            </Heading>
            <Text as={'span'} color={'orange.400'} fontSize={{ base: '2xl', sm: '1xl', md: '1xl' }} fontFamily={"Roboto"} >
                    A statistical comparison of fantasy NBA 
                </Text>

                <Text color={'gray.500'} fontSize={"20px"} fontFamily={"Roboto"}>
                Our goal is to allow you to determine the truck type that provides specific boosts in efficiency of delivering and further fulfills our goal of sustainability.
                </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
            </Stack>
          </Stack>
  
      </>
    );
  }
