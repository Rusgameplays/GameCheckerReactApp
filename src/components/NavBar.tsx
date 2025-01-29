import {HStack, Image, Text} from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";


const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'} padding={'10px'}>
            <Image
                src='https://avatars.mds.yandex.net/i?id=e4f44987ef97a8d7a896708fa238c0b0_l-5257871-images-thumbs&n=13'
                boxSize='60px'
            />
            <Text fontFamily={"Elephant-Regular"} fontSize={"50px"}>GameTracker</Text>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar