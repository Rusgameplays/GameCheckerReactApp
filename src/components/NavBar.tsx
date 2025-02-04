import {Flex, HStack, Image, Text} from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: Props) => {
    return (
        <Flex padding={'10px'}>
            <Image
                src='https://app-291201.games.s3.yandex.net/291201/y3qbjcfskdsm8j3i5hrt9a5b5qrfpzhh/logo.png'
                boxSize='60px'
                borderRadius="full"
            />
            <Text fontFamily={"Elephant-Regular"}
                  fontSize={"50px"}
                  mr={"15px"}>
                GameTracker
            </Text>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </Flex>
    )
}

export default NavBar