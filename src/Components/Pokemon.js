import { Component } from "react";
import axios from "axios";

class Pokemon extends Component {
  state = { userInput: "", imgURL: "", name: "", id: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value })
    this.getPokemon();
  };

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  getPokemon = async () => {
    const { userInput } = this.state;
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${userInput}`
        );
        const pokemon = res.data;
        this.setState({ name: "Name: " + pokemon.name, imgURL: pokemon.sprites.front_default, id: "ID " + pokemon.id });
          // debugger
      } catch (err) {
        this.setState({ name: "Pokemon not found!",  imgURL: null, id: "" });
      
    }
  };

  render() {
    const { name, imgURL, id } = this.state;
    return (
      <section>
        <h1>Search for a Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Find Your Pokemon" />
          <button type="submit">Submit</button>
        </form>
        <h2>{name}</h2>
        <img src={imgURL} alt={name}></img>
        <p>{id}</p>
      </section>
    );
  }
}
export default Pokemon;

// <option value="" defaultValue></option>
// {berries.map((berry) => {
//   //   debugger
//   return (
//     <option value={berry.name} key={berry.name}>
//       {berry.name}
//     </option>
