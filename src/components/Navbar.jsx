import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'

function Navbar() {
  const toast= useToast()
  const showToast=()=>{
    toast({
      title:"logged out",
      description:"successfully looged out",
      duration:5000,
      isClosable:true,
      status:"success",
      position:"top",
      // icon:<LockedIcon/>
    })
  }
  return (
    <Flex as="nav" p="10px" alignItems="center"mb="40px">
      <Heading as="h1" color="purple.400" >Nana's Task</Heading>
      <Spacer/>
      <HStack spacing="20px">
      <Avatar name="Nana" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>  
      <Text color="purple.800">Johndoe@nana.com</Text>
      <Button colorScheme="purple" onClick={showToast}>Logout</Button>
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