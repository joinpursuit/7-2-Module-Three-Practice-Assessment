import { useState } from "react";
import PokemonInfo from "./PokemonInfo"
import Search from "./PokemonSearch"

const Pokemon = () => {
    const [pokemon, setPokemon] = useState('');
    const search = (userInput) => {
        setPokemon(userInput)
    }
    return (
        <section>
            <h1>Search for a Pokemon</h1>
            <Search search={search}/>
            <PokemonInfo pokemon={pokemon}/>
        </section>
    )
};

export default Pokemon;