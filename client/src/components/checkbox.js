import { Checkbox, CheckboxGroup, Stack, useTheme, Text, Container, VStack, StackDivider, Grid, GridItem } from '@chakra-ui/react'

export default function PositionCheckBox(props) {
    const theme = useTheme()
    const playerPositions = props.checkboxValue

    return (
        <Container>
            <VStack divider={<StackDivider borderColor='white.200' />}>
                <Text mb="0" mt="3">{props.title}</Text>
                <CheckboxGroup colorScheme='orange' defaultValue={[]}>
                    <Grid templateColumns='repeat(5, 1fr)' gap={3}>
                    {playerPositions?.map((x, i) => {
                            return  <GridItem><Checkbox key={i} value={x[i]}>{x}</Checkbox></GridItem>

                        })}
          </Grid>
                </CheckboxGroup>
            </VStack>
        </Container>

    )
}
