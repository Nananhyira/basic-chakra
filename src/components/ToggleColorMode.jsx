import { Button, useColorMode } from '@chakra-ui/react'
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
import React from 'react'

export default function ToggleColorMode() {
  const {colorMode, toggleColorMode}= useColorMode()
  return (
    <Button colorScheme="purple" m="1rem" onClick={()=>{toggleColorMode()}}>
      {colorMode ==="dark"? <SunIcon  color="orange.200"/> :<MoonIcon  color="purples.700"/>}
    </Button>

    // <Button
    //   onClick={() => toggleColorMode()}
    //   pos="absolute"
    //   top="0"
    //   right="0"
    //   m="1rem"
    // >
    //   {colorMode === "dark" ? (
    //     <SunIcon color="orange.200" />
    //   ) : (
    //     <MoonIcon color="blue.700" />
    //   )}
    // </Button>
  )
}
