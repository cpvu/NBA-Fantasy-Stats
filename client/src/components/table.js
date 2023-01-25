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

import './styles.css'

export default function PlayerTable(props) {

    const playerInformation = props.playerInfo
    console.log(playerInformation)
    const stats = ['Pos', 'Points', 'Rebound', 'Assist', 'Steal', 'Threes', 'to']

    return (
        <TableContainer pt="25px" pb="15px" w="65vw" >
            <Table variant='simple' size="lg" alignItems={'center'}>
                <TableCaption mt="10">NBA 2022-2023 Season</TableCaption>
                <Thead>
                    <Tr>
                        <Th textAlign={'center'}>Player</Th>
                        {stats.map(stat => {
                            return(
                                <Th textAlign={'center'}>{stat}</Th>
                            )
                        })}
                    </Tr>
                </Thead>
                <Tbody textAlign={'center'}>
                    {playerInformation.map(x => {
                        return (
                            <tr>
                                <td>{x.Name}</td>
                                {stats.map(stat => (
                                    <td>{x[stat]}</td>
                                ))}
                            </tr>)
                    })}
                </Tbody>
                <Tfoot>
                    <Tr>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}