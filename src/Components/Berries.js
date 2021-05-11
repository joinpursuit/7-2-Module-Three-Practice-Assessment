import { Component } from "react";
import axios from "axios";

class Berries extends Component {
  state = { berries: [], berry: "", firmness: "" };

  updateBerry = async (e) => {
    const value = e.target.value;
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/berry/${value}`);
      this.setState({ firmness: res.data.firmness.name, berry: res.data.name });
      // debugger
    } catch (err) {
      this.setState({ firmness: [], berry: "" });
    }
  };

  loadBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/");
      const berryArray = res.data.results;
      this.setState({ berries: berryArray });
    } catch (err) {
      console.log(err);
      this.state({ berries: [] });
    }
  };

  componentDidMount() {
    this.loadBerries();
  }

  render() {
    const { berries, berry, firmness } = this.state;

    return (
      <section>
        <h1>Select a Type</h1>
        <select value={berry} onChange={this.updateBerry}>
          {/* <option></option> */}
          <option value="" defaultValue></option>
          {berries.map((berry) => {
            //   debugger
            return (
              <option value={berry.name} key={berry.name}>
                {berry.name}
              </option>
            );
          })}
        </select>
        <h3>
          {berry} {firmness}
        </h3>
      </section>
    );
  }
}

export default Berries;
