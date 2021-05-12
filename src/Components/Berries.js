import { Component } from "react";
import axios from "axios";

class Berries extends Component {
  state = { berries: [] };

  selectBerry = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/");
      this.setState({ berries: res.data.results });
    } catch (error) {
      console.log(error);
      this.setState({ berries: [] });
    }
  };

  componentDidMount() {
    this.selectBerry();
  }

  //async componentDidMount() {}
  render() {
    const { berries, berry } = this.state;
    const { updateBerry } = this.props;
    return (
      <div>
        <h1>Select a Type</h1>
        <select value={berry} onChange={updateBerry}>
          <option defaultValue="" ></option>
          {berries.map((berry) => {
            return (
              <option value={berry.name} key={berry.name}>
                {berry.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Berries;
