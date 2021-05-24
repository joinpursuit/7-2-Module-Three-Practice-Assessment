import React, { Component } from 'react';
import axios from 'axios';

class Pokemon extends Component {
    constructor() {
        super();
        this.state = {
            searchPokemon: '',
            currentPokemon: {},
        };
    };

    handleChange = (e) => {
        this.setState({
            searchPokemon: e.target.value,
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { searchPokemon } = this.state;

        try {
            const { data } = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
            );
        
            this.setState({
                currentPokemon: data,
                searchPokemon: '',
            });
        } catch(e) {
            this.setState({
                currentPokemon: {},
                searchPokemon: '',
            });
        };
    };

    render() {
        const { searchPokemon, currentPokemon } = this.state;

        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={searchPokemon}
                        type='text' 
                        placeholder='Find Your Pokemon'
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>

                {currentPokemon.name ? (
                    <div>
                        <p>Name: {currentPokemon.name}</p>
                        <img src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
                        <p>ID: {currentPokemon.id}</p>
                    </div>
                ) : (
                    <h2>Pokemon not found!</h2>
                )}
            </div>
        );
    };
};

export default Pokemon;
