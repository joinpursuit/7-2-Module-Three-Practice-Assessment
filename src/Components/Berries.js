import axios from "axios";
import { Component } from "react";

class Berries extends Component {
  state = { berries: [], selectedBerryUrl: "", selectedBerry: {} };

  fetchAllBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/");
      this.setState({ berries: res.data.results });
    } catch (error) {
      this.setState({ berries: [] });
    }
  };

  componentDidMount() {
    this.fetchAllBerries();
  }

  selectBerry = async (e) => {
    this.setState({ selectedBerryUrl: e.target.value });
    try {
      const res = await axios.get(e.target.value);
      this.setState({ selectedBerry: res.data });
    } catch (error) {
      this.setState({ selectedBerry: {} });
    }
  };

  render() {
    const { berries, selectedBerryUrl, selectedBerry } = this.state;
    return (
      <section>
        <h1>Select a Type</h1>
        <select value={selectedBerryUrl} onChange={this.selectBerry}>
          <option value="" selected ></option>
          {berries.map((berryObj) => {
            return (
              <option key={berryObj.name} value={berryObj.url}>
                {berryObj.name}
              </option>
            );
          })}
        </select>
        <h1>{selectedBerry.name}</h1>
        <p>{selectedBerry.firmness && selectedBerry.firmness.name}</p>
      </section>
    );
  }
}

export default Berries;
