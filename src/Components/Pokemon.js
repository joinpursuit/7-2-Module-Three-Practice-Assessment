import axios from "axios";
import React from "react";

class Pokemon extends React.Component {
  state = { input: "", pokemon: {}, searched: false };


  fetchPokemon = async (pokemon) => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      this.setState({ pokemon: res.data });
    } catch (error) {
      this.setState({ pokemon: {} });
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { input } = this.state;
    this.setState({ searched: true });
    this.fetchPokemon(input)
    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, pokemon, searched } = this.state;

    let pokemonDeets;
    if (searched) {
      if (pokemon.name) {
        pokemonDeets = (
          <div>
            <p>Name: {pokemon.name}</p>
            <img src={pokemon.sprites?.front_default} alt="a Pokemon" />
            <p>ID {pokemon.id}</p>
          </div>
        );
      } else {
        pokemonDeets = <div>Pokemon not found!</div>;
      }
    } else {
      pokemonDeets = null;
    }

    return (
      <section>
        <h1>Search for a Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Find Your Pokemon"
          />
          <button type="submit">Submit</button>
        </form>
        {pokemonDeets}
      </section>
    );
  }
}

export default Pokemon;
