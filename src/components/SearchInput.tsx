import React, {useRef} from "react";
import {Input} from "@chakra-ui/react";
import {InputGroup} from "./ui/input-group"
import {BsSearch} from "react-icons/bs";

interface Props {
    onSearch: (searchText: string) => void
}

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={(event) => {
            event.preventDefault()

        }}>
            <InputGroup startElement={<BsSearch/>}>
                <Input ref={ref} borderRadius={20} fontSize={"20px"} placeholder={'Search games...'}/>
            </InputGroup>
        </form>
    )
}

export default SearchInput