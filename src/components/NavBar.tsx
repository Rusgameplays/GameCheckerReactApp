import {HStack, Image, Text} from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";


const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image
                src='https://app-291201.games.s3.yandex.net/291201/y3qbjcfskdsm8j3i5hrt9a5b5qrfpzhh/logo.png'
                boxSize='60px'
                borderRadius="full"
            />
            <Text fontFamily={"Elephant-Regular"} fontSize={"50px"}>GameTracker</Text>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar