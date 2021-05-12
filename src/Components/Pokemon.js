import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Pokemon.css"

const Pokemon = () => {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [hasSearched, setHasSearched] = useState(false);

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input}/`
      );
      setPokemon(res.data);
    } catch (error) {
      console.log(error);
      setPokemon({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon();
    setHasSearched(true);
    setInput("");
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  let result;
  if (pokemon.name || pokemon.id) {
      result = 
      <section>
          <h3>Name: <span>{pokemon.name}</span></h3>
          <img src={pokemon.sprites.front_default} alt="pokemon-pic"/>
          <h3> ID <span>{pokemon.id}</span></h3>
      </section>
  } else if (hasSearched) {
      result = "Pokemon not found! Try another name or ID number"
  } else {
      result = "Use the search bar to find a Pokemon"
  }

  return (
    <main className="Pokemon">
      <h1>Search for a Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleChange}
          placeholder="Find Your Pokemon"
        />
        <button>Submit</button>
        <br/>
        <br/>
        {result}
      </form>
    </main>
  );
};

export default Pokemon;
