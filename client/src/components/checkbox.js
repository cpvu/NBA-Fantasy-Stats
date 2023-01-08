import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

export default function PositionCheckBox() {
    return(
        <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
            <Stack spacing={[1, 5]} direction={['column', 'row']} my="20px">
                <Checkbox value='PG'>PG</Checkbox>
                <Checkbox value='PF'>PF</Checkbox>
                <Checkbox value='SG'>SG</Checkbox>
                <Checkbox value='SF'>SF</Checkbox>
                <Checkbox value='C'>C</Checkbox>
            </Stack>
        </CheckboxGroup>
    )
}
