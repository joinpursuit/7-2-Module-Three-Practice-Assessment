import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import "./pokemon.css";

const Pokemon = () => {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [pokemonSprite, setPokemonSprite] = useState("");
  const [id, setID] = useState("");
  const [error, setError] = useState(false);
  const [abilities, setAbilities] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`
      );
  
      setPokemon(res.data.name);
      setPokemonSprite(res.data.sprites.front_default);
      setID(res.data.id);
  
      setAbilities(res.data.abilities);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Search for a Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Find Your Pokemon"
          onChange={handleInputChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {error === false && pokemon && <h2>Name: {pokemon}</h2>}
      {error === false && pokemonSprite && (
        <img src={pokemonSprite} alt="sprite" />
      )}
      {error === false && id && <h2>ID {id}</h2>}
      {error === true && <h1>Pokemon not found!</h1>}
      {error === false && pokemon && <h1 classname="abilities">Abilities: </h1>}
      
      {error===false && abilities.map((ability) => {
        
        return (
          <ul className="abilities-ul">
            <li>{ability.ability.name}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Pokemon;
