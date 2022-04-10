import axios from "axios";
import React from "react";

class Locations extends React.Component {
  state = { locations: [], showLocations: false };

  getLocations = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/location");
      const locationsArray = res.data.results;
      this.setState({ locations: locationsArray });
    } catch (error) {
      this.setState({ locations: [] });
    }
  };

  componentDidMount() {
    this.getLocations();
  }

  handleClick = () => {
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
        {locations.map((location) => {
            return <li key={location.name}>{location.name}</li>
            })}
            </ul>) : <ul></ul>}
      </section>
    );
  }
}

export default Locations;
