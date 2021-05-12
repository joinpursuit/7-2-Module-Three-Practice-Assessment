import React, { Component } from "react";
import axios from "axios";

export class Locations extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: "Show Locations",
      locations: [],
    };
  }

  handleClick = async () => {
    let { data } = await axios.get("https://pokeapi.co/api/v2/location");
    if (this.state.buttonText === "Show Locations") {
      this.setState({
        locations: data.results,
        buttonText: "Hide Locations",
      });
    } else {
      this.setState({
        locations: [],
        buttonText: "Show Locations",
      });
    }
  };

  render() {
    const { buttonText, locations } = this.state;
    const renderLocations = () => {
      return locations.map((elem, i) => {
        return <li key={i}>{elem.name}</li>;
      });
    };
    return (
      <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>{buttonText}</button>
        <ul>{renderLocations()}</ul>
      </div>
    );
  }
}

export default Locations;
