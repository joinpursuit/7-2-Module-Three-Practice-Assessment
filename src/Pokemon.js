import React, { Component } from "react";
import axios from "axios";

export class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      pokemon: [],
      error: "Use the search bar to find a Pokemon",
      show: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.get(
        ` https://pokeapi.co/api/v2/pokemon/${this.state.input}/`
      );
      this.setState({
        pokemon: data,
        input: "",
        error: "",
        show: true,
      });
    } catch (error) {
      this.setState({
        error: "Pokemon not found! Try another name or ID number",
        input: "",
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    const { input, pokemon, error, show } = this.state;
    const renderPokemon = () => {
      return (
        <div>
          <h2>Name: {pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt="pokemon" />
          <p>
            <strong>ID</strong> {pokemon.id}
          </p>
        </div>
      );
    };
    return (
      <div className="pokemon">
        <h1>Search for a Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="Find Your Pokemon"
            type="text"
            name=""
            id=""
            value={input}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>{error}</h4>
        {show ? renderPokemon() : ""}
      </div>
    );
  }
}

export default Pokemon;
