import axios from "axios";
import React from "react";

class Berries extends React.Component {
  state = { berries: [], berryName: "", berryFirmness: "", berryFlavors: [] };

  pickBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/");
      const berryArray = res.data.results;
      this.setState({ berries: berryArray });
    } catch (error) {
      console.log("There are no berries for you!");
      this.setState({ berries: [] });
    }
  };

  componentDidMount() {
    this.pickBerries();
  }

  selectBerry = async (e) => {
    this.setState({ berryName: e.target.value });
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/berry/${e.target.value}`
      );
      this.setState({
        berryFirmness: res.data.firmness.name,
        berryFlavors: res.data.flavors,
      });
    } catch (error) {
      this.setState({ berryFirmness: "", berryFlavors: [] });
    }
  };

  render() {
    const { berries, berryName, berryFirmness, berryFlavors } = this.state;
    return (
      <div>
        <h1>Select a Type</h1>
        <select value={berryName} onChange={this.selectBerry}>
          <option value="" defaultValue></option>
          {berries.map((berry) => {
            return <option key={berry.name}>{berry.name}</option>;
          })}
        </select>
        <h1>{berryName}</h1>
        <p>{berryFirmness}</p>
        <ul>{berryFlavors.map((berryFlavor) => {
          return <li key={berryFlavor.flavor.url}>{berryFlavor.flavor.name}</li>
        })}</ul>
      </div>
    );
  }
}

export default Berries;
