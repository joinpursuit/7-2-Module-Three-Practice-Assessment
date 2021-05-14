import { useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSearched(true);
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
      setPokemon(res.data);
    } catch (err) {
      setPokemon({});
    }
    setInput("");
  };

  const handleChange = (e) => setInput(e.target.value);

  let text;
  if (hasSearched) {
    if (pokemon.name) {
      text = (
        <div>
          <p>Name: {pokemon.name}</p>
          <img src={pokemon.sprites?.front_default} alt='pokemon'/>
          <p>ID {pokemon.id}</p>
        </div>
      );
    } else {
      text = <div>Pokemon not found!</div>;
    }
  } else {
    text = null;
  }
  return (
    <section>
      <h1>Search for a Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder={"Find Your Pokemon"}
        />
        <button type="submit">Submit</button>
      </form>
      {text}
    </section>
  );
};

export default Pokemon;
