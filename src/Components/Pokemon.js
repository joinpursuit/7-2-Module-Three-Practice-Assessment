import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
  // const [pokeOn, setPokeOn] = setState("");
  const [pokemon, setPokemon] = useState("");
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState("");

  const getPokemon = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      setPokemon(res.data);
      //   debugger
    } catch (error) {
      console.log(error);
      setPokemon("");
      setNotFound("Pokemon not found! Try another name or ID number");
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>Search for a Pokemon</h1>
      <form onSubmit={getPokemon}>
        <input onChange={handleChange} placeholder="Find Your Pokemon" />
        <button>Submit</button>
      </form>
      <section className="pokemon-display">
        {pokemon ? (
          <div>
            <div>Name:{" "}{pokemon.name}</div>
            <img src={pokemon.sprites.front_default} />
            <div>ID {pokemon.id}</div>
          </div>
        ) : (
          notFound
        )}
      </section>
    </div>
  );
};

export default Pokemon;
