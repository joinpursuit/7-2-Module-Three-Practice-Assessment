import { Component } from "react";
import axios from "axios";
// Displays the header "Search for a Pokemon" above a text input with an input type submit.
// When a user inputs text and presses "submit"
// name
// sprites.front_default
// id
// CHALLENGE - NOT REQUIRED Look through the JSON data and try to add more information below
// of the character should appear below.

// The input will accept an id or full name (no need for partial matches)
// If the user's input does not match a name or id (misspelled or otherwise), the text "Pokemon not found! Try another name or ID number" should display below the input.
// The input should clear once the "submit" button is pressed.
// New inputs should replace the previously displayed information.


class Pokemon extends Component {
state = { userInput: "", pokes: [], name: "" }

handleSubmit = (e) => {
    e.preventDefault();
}

handleChange = (e) => {
    this.setState({userInput: e.target.value, name: e.target.value});
    this.getPokemon();
}


getPokemon = async () => {
    // const { name } = this.state;
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/stench`);
      const pokeArray = res.data.results;
      this.setState({ pokes: pokeArray });
    //   debugger
    } catch (err) {
      console.log(err);
      this.setState({ pokes: [] });
    }
  };

  render() {
      const { pokes } = this.state;
    return (
      <section className="section">
        <h1>Search for a Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Find Your Pokemon" />
          <button type="submit">Submit</button>
        </form>
        <ul>
            {pokes.map((poke) => {
                return (
                    <li key={poke.name}></li>
                )
            })}
        </ul>
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