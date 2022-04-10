import axios from "axios";
import { useState } from "react";

const Pokemon = () => {
  const [userInput, setUserInput] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.value);
    getPokemon();
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      setName("");
      setImgURL("");
      setId("");
    } else {
      setUserInput(e.target.value);
    }
  };

  const getPokemon = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${userInput}`
      );
      const pokemon = res.data;
      setName("Name: " + pokemon.name);
      setImgURL(pokemon.sprites.front_default);
      setId("ID " + pokemon.id);
      // debugger
    } catch (err) {
      setName("Pokemon not found!");
      setImgURL(null);
      setId("");
    }
  };

  return (
    <section>
      <h1>Search for a Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Find Your Pokemon" />
        <button type="submit">Submit</button>
      </form>
      <h2>{name}</h2>
      <img src={imgURL} alt={name}></img>
      <p>{id}</p>
    </section>
  );
};
export default Pokemon;
