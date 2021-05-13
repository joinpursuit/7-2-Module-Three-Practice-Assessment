import axios from "axios";
import { Component } from "react";

class Locations extends Component {
  state = { locations: [], show: "Show Locations" };

// find a better way to code this
  loadLocations = async () => {
      const { show } = this.state;
     if (show === "Show Locations") {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/location");
        this.setState({ locations: res.data.results, show: "Hide Locations" });
      } catch (err) {
        this.setState({ locations: [] });
      }
    } else {
      this.setState({ locations: [], show: "Show Locations" });
    }
  };

  render() {
    const { locations, show } = this.state;
    return (
      <section className="section">
        <h1>List of Locations</h1>
        <ul>
          {locations.map((location) => {
            return <li key={location.name}>{location.name}</li>;
          })}
        </ul>
        <button onClick={this.loadLocations}>{show}</button>
      </section>
    );
  }
}

export default Locations;
