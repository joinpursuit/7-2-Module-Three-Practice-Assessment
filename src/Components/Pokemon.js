import { useState } from 'react';
import axios from "axios";

export default function Pokemon() {
    const [input, setInput] = useState("")
    const [correctInput, setCorrectInput] = useState(true)
    const [pokemon, setPokemon] = useState({})
    const handleChange = (e) => {
        setInput((prevInput) => e.target.value)
    }
    const fetchPokemon = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${input}/`
            )
            setPokemon((prev) => res.data)
            setInput((prev) => "")
            setCorrectInput((prev) => true)
        } catch (err) {
            setCorrectInput((prev) => false)
            setInput((prev) => "")
        }
    }
    if (correctInput === false) {
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={fetchPokemon}>
                    <input value={input} onChange={handleChange} placeholder="Find Your Pokemon"></input>
                    <button>Submit</button>
                </form>
                <h3>Pokemon not found! Try another name or ID number</h3>
            </div>
        )
    } else if ((correctInput === true) && (Object.keys(pokemon).length !== 0)) {
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={fetchPokemon}>
                    <input value={input} onChange={handleChange} placeholder="Find Your Pokemon"></input>
                    <button>Submit</button>
                </form>
                <h3>Name: {pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3>ID {pokemon.id}</h3>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={fetchPokemon}>
                    <input value={input} onChange={handleChange} placeholder="Find Your Pokemon"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}