import React, { Component } from 'react';

class PokemonForm extends Component {
  

    handleSubmit=(e)=>{
        e.preventDefault()
        const {getPokemon,pokemon, inputValid} = this.props
        getPokemon(pokemon, inputValid)
    }


    render() {
        const {input, handleInput}= this.props
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input value={input} type="text" placeholder="Find Your Pokemon" onChange={handleInput} />
                    <button type="submit">Submit</button>
                </form>
                <h2>Use the search bar to find a Pokemon</h2>
            </div>
        );
    }
}

export default PokemonForm;