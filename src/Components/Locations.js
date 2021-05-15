import React from "react";
import axios from "axios";

class Locations extends React.Component {
  state = { locations: [], showLocations: false };

  componentDidMount() {
    this.fecthLocations();
  }

  
  fecthLocations = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/location");
      this.setState({ locations: res.data.results });
    } catch (error) {
      console.log(error);
      this.setState({ locations: [] });
    }
  };


  handleClick = () => {
    this.setState((pervState) => {
      return { showLocations: !pervState.showLocations };
    });
  };

  render() {
    const { locations, showLocations } = this.state;
    return (
      <div>
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
        ) : (
          <ul></ul>
        )}
      </div>
    );
  }
}

export default Locations;
