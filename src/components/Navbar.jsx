import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center"mb="40px">
      <Heading as="h1" color="purple.400" >Nana's Task</Heading>
      <Spacer/>
      <HStack spacing="20px">
      <Box bg="gray.200" p="10px">Avatar</Box>
      <Text>Johndoe@nana.com</Text>
      <Button colorScheme="purple">Logout</Button>
       </HStack>
    </Flex>



    // <Flex bg="blue.700" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">1</Box>
    //   <Box w="150px" h="50px" bg="blue">2</Box>
    //   <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //   <Box w="150px" h="50px" flexGrow="2" bg="pink">4</Box>
      

    // </Flex>
  )
}

export default Navbar