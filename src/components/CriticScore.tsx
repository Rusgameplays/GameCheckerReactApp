import React from "react"
import {Badge} from "@chakra-ui/react";

interface Props {
    score: number
}

const CriticScore = ({score}: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

    return (
        <Badge color={color} fontSize={"16px"} paddingX={"10px"}>{score}</Badge>
    )
}

export default CriticScore