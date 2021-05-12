import React, { Component } from "react";

class PokemonDisplay extends Component {

  render() {
    const { pokemon, inputValid } = this.props;
    let text;
    if (inputValid) {
      if (pokemon.name) {
        text = (
          <div>
            <h2>Name: {pokemon.name}</h2>
            <img src={pokemon.sprites?.front_default} alt="pokemon-image" />
            <h2>ID {pokemon.id}</h2>
          </div>
        );
      } else {
        text = <h1>Pokemon not found! Try another name or ID number</h1>;
      }
    } else {
      text = null;
    }
    return (
    <div>
    { text };
    </div>
    )
  }
}

export default PokemonDisplay;
