import axios from 'axios'
import {Component} from 'react'

import "./Locations.css"

class Locations extends Component {
  state = { locations: [], showLocations: false }

  fetchLocations = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/location")
      this.setState({locations: res.data.results})
    } catch (error) {
      this.setState({locations: []})
    }
  }

  componentDidMount() {
    this.fetchLocations();
  }

  buttonClick = () => {
    this.setState((prevState) => {
        return ({showLocations: !prevState.showLocations})
      })

  }

    render() {
      const { locations, showLocations } = this.state;
        return(
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.buttonClick} >{showLocations ? "Hide Locations" : "Show Locations" }</button>
                {showLocations ? (<ul>
                  {locations.map((location) => {
                    return <li key={location.name}>{location.name}</li>
                  })}
                </ul>) : <ul></ul>}
            </div>
        )
    }
}

export default Locations;

// - Displays a header
// - centered on the page
// - with the text "List of Locations".
// - Display a button that toggles back and forth between "Show Locations" and "Hide Locations".
// - When show locations has been selected, it displays an unordered list of all of the locations retrieved at `https://pokeapi.co/api/v2/location`, centered on the page.
// - Each location should include the `name`
