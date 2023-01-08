import { Center, Image, Text, Heading, Stack } from '@chakra-ui/react';
import PageDivider from './divider';
import AD3 from '../assets/AD3.jpg'

export default function CallToActionWithAnnotation() {
    return (
        <>
            <Stack
                textAlign={'center'}
                spacing={{ base: 8, md: 5 }}
                py={{ base: 100, md: 6 }}>
                <Heading
                    fontFamily={"Roboto"}
                    letterSpacing={1.5}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}>
                    PBCC NBA Basketball Fantasy Tracker<br />

                    <PageDivider></PageDivider>
                </Heading>
                <Text as={'span'} color={'orange.400'} fontSize={{ base: '2xl', sm: '1xl', md: '1xl' }} fontFamily={"Roboto"} >
                    A statistical comparison of fantasy NBA players
                </Text>

                <Center>
                    <Image w="30%" src={AD3} alt='AD Injured' />
                </Center>

                <Text color={'gray.500'} fontSize={"20px"} fontFamily={"Roboto"}>
                    Filter below based on position, stats and teams
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
