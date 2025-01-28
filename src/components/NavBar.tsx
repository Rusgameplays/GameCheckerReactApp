import {HStack, Image, Text} from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
    return (
        <HStack>
            <Image
                src='https://avatars.mds.yandex.net/i?id=e4f44987ef97a8d7a896708fa238c0b0_l-5257871-images-thumbs&n=13'
                boxSize='60px'
            />
            <Text color={"black"}>NavBar</Text>
        </HStack>
    )
}

export default NavBar