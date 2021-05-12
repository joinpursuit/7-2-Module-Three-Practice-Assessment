import React, { Component } from "react";
import PokemonForm from "./PokemonForm";
import PokemonDisplay from "./PokemonDisplay";
import axios from "axios";

class PokemonComp extends Component {
  state = { input: "", pokemon: {}, inputValid: false };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  getPokemon = async () => {
    this.setState({ inputValid: true });
    try {
      const { input } = this.state;
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input}/`
      );
      this.setState({ pokemon: res.data });
    } catch (error) {
      console.log(error);
      this.setState({ pokemon: {} });
    }
    this.setState({ input: "" });
  };

  render() {
    const { pokemon, input, inputValid } = this.state;
    console.log(this.state);
    return (
      <div>
        <PokemonForm
          input={input}
          pokemon={pokemon}
          inputValid={inputValid}
          handleInput={this.handleInput}
          getPokemon={this.getPokemon}
        />
        <PokemonDisplay pokemon={pokemon} inputValid={inputValid} />
      </div>
    );
  }
}

export default PokemonComp;
