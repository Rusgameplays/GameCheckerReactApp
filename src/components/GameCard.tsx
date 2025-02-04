import React from "react"
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import CriticScore from "./CriticScore";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (

        <Card.Root>
            <>
                <Image
                    src={game.background_image}
                    width="600px"
                    height="300px"
                />
                <CardBody>
                    <Heading fontSize={'2xl'}>{game.name}</Heading>
                    <HStack justifyContent={'space-between'}>
                        <CriticScore score={game.metacritic}/>
                    </HStack>
                </CardBody>
            </>
        </Card.Root>
    )
}

export default GameCard
