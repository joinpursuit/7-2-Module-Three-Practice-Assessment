import { Component } from "react";
import axios from "axios";

class Locations extends Component {
  state = { locations: [], showLocations: false };

  componentDidMount() {
    this.fetchLocations();
  }

  fetchLocations = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/location");
      this.setState({ locations: res.data.results });
    } catch (err) {
      this.setState({ locations: [] });
    }
  };

  handleClick = (e) => {
    this.setState((prevState) => {
      return { showLocations: !prevState.showLocations };
    });
  };

  render() {
    const { locations, showLocations } = this.state;
    return (
      <section>
        <h1>List of Locations</h1>

        <button onClick={this.handleClick}>
          {showLocations ? "Hide Locations" : "Show Locations"}
        </button>
        {showLocations ? (
          <ul>
            {locations.map((locationObj) => {
              return <li key={locationObj.name}>{locationObj.name}</li>;
            })}
          </ul>
        ): <ul></ul>}
      </section>
    );
  }
}

export default Locations;
