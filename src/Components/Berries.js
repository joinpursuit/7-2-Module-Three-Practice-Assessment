
import { Component } from "react";
import axios from "axios";

class Berries extends Component {
  state = { berries: [], URL: "", selectedBerry: {}}

  fetchBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/")
      this.setState({ berries: res.data.results})
    } catch (error) {
      this.setState({ berries: [] })
    }
  }

  componentDidMount() {
    this.fetchBerries();
  }

  selectBerry = async (e) =>{
    this.setState({URL: e.target.value})
    try {
      const res = await axios.get(e.target.value)
      this.setState({ selectedBerry: res.data })
    } catch (error) {
      this.setState({ selectedBerry: {} })
    }
  }



  render() {
    const { berries, URL, selectedBerry } = this.state;
    return (<section>
      <h1>Select a Type</h1>
      <select value={URL} onChange={this.selectBerry}>
        <option value="" selected ></option>
        {berries.map(berry => <option key={berry.name} value={berry.url}>{berry.name}</option> )}

      </select>
      <h1>{selectedBerry.name}</h1>
      <p>{selectedBerry.firmness && selectedBerry.firmness.name}</p>
    </section>)
  }
}

export default Berries;

