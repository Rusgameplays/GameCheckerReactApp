import {Grid, GridItem} from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import {useState} from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {Genre} from "./hooks/useGenres";
import React from "react";


export interface GameQuery {
    genre: Genre | null
    searchText: string
}

const App = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return <Grid
        templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav""aside main"`
        }}
        templateColumns={{
            base: '1fr',
            lg: '200px 1fr'
        }}
    >
        <GridItem area="nav">
            <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
        </GridItem>
        <GridItem area="aside">
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
        <GridItem area="main" paddingX={"17px"}>
            <GameGrid gameQuery={gameQuery}/>
        </GridItem>
    </Grid>
};

export default App;
