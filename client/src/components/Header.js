import {Center, Image, Text, Heading, Stack } from '@chakra-ui/react';

export default function MainPageHeader(props) {
    return (
        <Center>
            <Heading
            fontFamily={"Roboto"}
            mt="20px"
            letterSpacing={1.5}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}> {props.title}
            </Heading>
        </Center>
    )}