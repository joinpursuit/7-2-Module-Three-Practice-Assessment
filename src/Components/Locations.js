import { Component } from "react";
import axios from "axios";

class Locations extends Component {
    state = { locations: [], showLocations: false }

    fetchLocations = async() => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/location")
            this.setState({ locations: res.data.results })
        } catch (error) {
            this.setState({ locations: [] })
        }

    }

    componentDidMount() {
        this.fetchLocations()
    }

    handleClick = (e) => {
        this.setState((prevState) => {
            return { showLocations: !prevState.showLocations }
        })
    }


    render() {
        const { locations, showLocations } = this.state;
        return (
            <section>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{showLocations ? "Hide Locations" : "Show Locations"}</button>
                    {showLocations ? <ul>{locations.map(l => <li key={l.name}>{l.name}</li>)}</ul> : <ul></ul> }
            </section>
        )
    }
}

export default Locations;