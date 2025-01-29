import React from 'react'
import {HStack, IconButton, Text} from "@chakra-ui/react";
import {useColorMode} from "./ui/color-mode"
import {LuMoon, LuSun} from "react-icons/lu"

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
    return (
        <HStack>
            <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                {colorMode === "light" ? <LuSun/> : <LuMoon/>}
            </IconButton>
            {colorMode === "light" ? <Text fontFamily={"Elephant-Regular"} color={"black"}>Dark mode</Text> :
                <Text fontFamily={"Elephant-Regular"} color={"white"}>Light mode</Text>}
        </HStack>
    )
}

export default ColorModeSwitch