import {
    Menu,
    Button,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

 export default function FilterMenu () {
    return (
            <Menu>
                <MenuButton as={Button} mt="25px" mb="25px" >
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
    )
 }