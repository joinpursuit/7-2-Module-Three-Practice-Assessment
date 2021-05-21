import axios from "axios";
import { Component } from "react";

class Pokeman extends Component {
  state = { input: "", pokemonObj: {} };

  // getPokemonInfo = async (input) => {
  // };
  
  // componentDidMount() {
  //   // this.getPokemonInfo();
  // }
  handleInputChange = (e) => {
    this.setState({input: e.target.value})
  }
   
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {input} = this.state;
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
      this.setState({ pokemonObj: res.data });
    } catch (error) {
      console.log(error)
      this.setState({ pokemonObj: {} });
    }
  };

  render() {
    const { pokemonObj, input } = this.state;
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Search for a Pokemon</h1>
       <input type="text" placeholder="Find Your Pokemon" value={input} onChange={this.handleInputChange}></input>
        <button type="submit">Submit</button>
        {pokemonObj.name === input ? (
          <div>
            <p>Name: {pokemonObj.name}</p>
            <img src={pokemonObj.sprites.front_default} alt="pokemon" />
            <p>ID {pokemonObj.id}</p>
          </div>
        ) : (
          <p>Pokemon not found! Try another name or ID number </p>
        )}
      </form>
    );
  }
}

export default Pokeman;

// - Displays the header "Search for a Pokemon" above a text input with an input type `submit`.
// - When a user inputs text and presses "submit"
//   - `name`
//   - `sprites.front_default`
//   - `id`
//   - **CHALLENGE - NOT REQUIRED** _Look through the JSON data and try to add more information below_

// of the character should appear below.

// - The input will accept an id or full name (no need for partial matches)
// - If the user's input does not match a name or id (misspelled or otherwise), the text "Pokemon not found! Try another name or ID number" should display below the input.
// - The input should clear once the "submit" button is pressed.
// - New inputs should replace the previously displayed information.
