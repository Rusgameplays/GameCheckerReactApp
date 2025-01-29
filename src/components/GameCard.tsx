import React from "react"
import {Game} from "@/hooks/useGames";
import {Card, CardBody, Heading, Image, Text} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card.Root borderRadius={20} overflow='hidden'>
            <Image
                src={game.background_image}
                boxSize="300px"
            />
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            </CardBody>
        </Card.Root>
    )
}

export default GameCard
