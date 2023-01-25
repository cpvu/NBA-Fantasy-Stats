import React from "react";
import { Checkbox, CheckboxGroup, useTheme, Text, Container, VStack, StackDivider, Grid, GridItem, useCheckbox, useCheckboxGroup, getCheckboxprops } from '@chakra-ui/react'

export default function PositionCheckBox(props) {
    const theme = useTheme()
    const playerPositions = props.checkboxValue

    function callCheckbox(e,value) {
        console.log(props.checkedItems)
        props.setCheckedItems(prevItems => {
           if(e.target.checked){
              return [...prevItems, value];
           }
           else{
              return prevItems.filter(item => item !== value);
           }
        });
    }
    
    return (
        <Container>
            <VStack divider={<StackDivider borderColor='white.200' />}>
                <Text mb="0" mt="3">{props.title}</Text>
                <CheckboxGroup colorScheme='orange' defaultValue={[]}>
                    <Grid templateColumns='repeat(5, 1fr)' gap={3}>
                        {playerPositions?.map((x, i) => {
                            return <GridItem><Checkbox onChange={e => callCheckbox(e,x)} key={i} value={x[i]}>{x}</Checkbox>
                            </GridItem>
                        })}
                    </Grid>
                </CheckboxGroup>
            </VStack>
        </Container>
    )
}

