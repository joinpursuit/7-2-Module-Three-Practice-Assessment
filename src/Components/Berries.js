import axios from "axios";
import React from "react";

class Berries extends React.Component {
  state = { berries: [], berryName: "", berryFirmness: "" };

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
      this.setState({ berryFirmness: res.data.firmness.name });
      //   debugger;
    } catch (error) {
      this.setState({ berryFirmness: "" });
    }
   try {
     const res = await axios.get(`https://pokeapi.co/api/v2/berry/${e.target.value}`)
    //  debugger
     this.setState({ berryFlavor: res.data.flavors.flavor.name })
   } catch (error) {
    this.setState({ berryFlavor: "" });
   }
  };

  render() {
    const { berries, berryName, berryFirmness, berryFlavor } = this.state;
    return (
      <div>
        <h1>Select a Type</h1>
        <select onChange={this.selectBerry}>
          <option value="" defaultValue></option>
          {berries.map((berry) => {
            return <option key={berry.name}>{berry.name}</option>;
          })}
        </select>
        <h1>{berryName}</h1>
        <p>{berryFirmness}</p>
        <p>{berryFlavor}</p>
      </div>
    );
  }
}

export default Berries;
