import { useState } from 'react';
import axios from "axios";

export default function Pokemon() {
    const [input, setInput] = useState("")
    const [toggle, setToggle] = useState(true)
    const [pokemon, setPokemon] = useState()
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
            setToggle((prev) => true)
        } catch (err) {
            setToggle((prev) => false)
            setInput((prev) => "")
        }
    }
    if (toggle === false){
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
    } else if (toggle === true && pokemon){
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={fetchPokemon}>
                    <input value={input} onChange={handleChange} placeholder="Find Your Pokemon"></input>
                    <button>Submit</button>
                </form>
                <h3>Name: {pokemon.name}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <h3>ID {pokemon.id}</h3>
            </div>
        )
    } else  {
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
