import React from "react";
import axios from "axios"

class Pokemon extends React.Component {
  state = { input: "", pokemon: {},hasSearched: false }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({hasSearched: true})
    const { input } = this.state;
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
      debugger
      this.setState({ pokemon: res.data })
    } catch (error) {
      this.setState({ pokemon: {} })
    }
    this.setState({ input: "" })
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  render() {
    const { input, pokemon, hasSearched } = this.state;
    let text = "";
    if(hasSearched){
      if(pokemon.name){
        text = (<div><p>Name: {pokemon.name}</p>
        <img src={pokemon.sprites.front_default} />
        <p>ID {pokemon.id}</p></div>)
      }else{
        text = <p>Pokemon not found!</p>;
      }
    }
    return (
      <section>
        <h1>Search for a Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={input} onChange={this.handleChange} placeholder="Find Your Pokemon" />
          <button type="submit">Submit</button>
        </form>
        {text}


      </section>
    )
  }

}


export default Pokemon