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
    <TableContainer pt="25px" pb="15px">
        <Table variant='simple' size="sm">
        <TableCaption mt="10">NBA 2022-2023 Season</TableCaption>
        <Thead>
            <Tr>
            <Th>Player</Th>
            <Th isNumeric>Games Played</Th>
            <Th isNumeric>Mins</Th>
            <Th>Points</Th>
            <Th isNumeric>FG %</Th>
            <Th>FT %</Th>
            <Th>FTA %</Th>
            <Th isNumeric>3PM</Th>
            <Th isNumeric>3PMA</Th>
            <Th isNumeric>Rebounds</Th>
            <Th isNumeric>Assists</Th>
            <Th isNumeric>Turn Overs</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
            <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
            <Td isNumeric>25.4</Td>
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