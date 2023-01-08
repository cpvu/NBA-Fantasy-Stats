import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

export default function PlayerTable() {

    return (

        <TableContainer pt="25px" pb="15px" w="100%">
            <Table variant='simple' size="lg">
                <TableCaption mt="10">NBA 2022-2023 Season</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Player</Th>
                        <Th>Games Played</Th>
                        <Th>Mins</Th>
                        <Th>Points</Th>
                        <Th >FG %</Th>
                        <Th>FT %</Th>
                        <Th>FTA %</Th>
                        <Th>3PM</Th>
                        <Th>3PMA</Th>
                        <Th>Rebounds</Th>
                        <Th >Assists</Th>
                        <Th >Turn Overs</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                        <Td>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td >30.48</Td>
                        <Td >25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td >0.91444</Td>
                        <Td>25.4</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}