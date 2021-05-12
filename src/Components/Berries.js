import { Component } from "react";
import axios from "axios";

class Berries extends Component {
  state = { berries: [], berry: "", firmness: "", flavors: [] };

  updateBerry = async (e) => {
    const value = e.target.value;
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/berry/${value}`);
      const data = res.data;
      // debugger
      this.setState({ firmness:data.firmness.name, berry: data.name, flavors: data.flavors });
    } catch (err) {
      this.setState({ firmness: "", berry: "" });
    }
  };
  
  
  loadBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/");
      // debugger
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
    const { berries, berry, firmness,flavors } = this.state;

    return (
      <section className="section">
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
        <h3>{berry}</h3>
        <h5>{firmness}</h5>
        <ul>{flavors.map((flavor) => {
          return (
            <option value={flavor.flavor.name} key={flavor.flavor.name}>{flavor.flavor.name}</option>
          )
        })}</ul>
      </section>
    );
  }
}

export default Berries;
