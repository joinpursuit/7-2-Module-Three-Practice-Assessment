import React from "react";
import axios from "axios";

class Pokemon extends React.Component {
  state = { input: "", pokemon: {}, hasSearched: false };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ hasSearched: true });
    try {
      const { input } = this.state;
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
      this.setState({ pokemon: res.data });
    } catch (error) {
      console.log(error);
      this.setState({ pokemon: {} });
    }
    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { input, pokemon, hasSearched } = this.state;

    let search;
    if (hasSearched) {
      if (pokemon.name) {
        search = (
          <div>
            <p>Name: {pokemon.name}</p>
            <img src={pokemon.sprites?.front_default} alt="Pokemon" />
            <p>ID {pokemon.id}</p>
          </div>
        );
      } else {
        search = (
          <div>
            <p>Pokemon not found!</p>
          </div>
        );
      }
    } else {
      search = null;
    }
    return (
      <section>
        <h1>Search for a Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            placeholder={"Find Your Pokemon"}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {search}
      </section>
    );
  }
}
export default Pokemon;
