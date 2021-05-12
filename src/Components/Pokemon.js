import { Component } from "react";
import axios from "axios";

class Pokemon extends Component {
  state = { input: "", pokemon: {}, hasSearched: false };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({hasSearched: true})
    try {
      const { input } = this.state;
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
      this.setState({ pokemon: res.data });
    } catch (err) {
      this.setState({ pokemon: {} });
    }

    this.setState({ input: "" });
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    const { input, pokemon, hasSearched } = this.state;

    let text; 
    if(hasSearched) {
        if(pokemon.name) {
            text = (
              <div>
                <p>Name: {pokemon.name}</p>
                <img src={pokemon.sprites?.front_default} />
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder={"Find Your Pokemon"}
          />
          <button type="submit">Submit</button>
        </form>
        {text}
      </section>
    );
  }
}

export default Pokemon;
