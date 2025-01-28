import {Grid, GridItem} from "@chakra-ui/react"
import NavBar from "./components/NavBar.tsx";


const App = () => {
    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav""aside main"`
    }}>
        <GridItem area="nav" bg="white">
            <NavBar/>
        </GridItem>
        <GridItem area="aside" bg="blue">Aside </GridItem>
        <GridItem area="main" bg="green">Main </GridItem>
    </Grid>
};

export default App;
