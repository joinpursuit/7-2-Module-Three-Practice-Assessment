import React, { Component } from "react";
import axios from "axios";

export class Berries extends Component {
  constructor() {
    super();
    this.state = {
      berries: [],
      selectedValue: "",
      berry: false,
      data: [],
    };
  }

  componentDidMount() {
    this.getBerries();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedValue !== this.state.selectedValue) {
      let { data } = await axios.get(
        `https://pokeapi.co/api/v2/berry/${this.state.selectedValue}`
      );
      this.setState({
        berry: true,
        data: [data],
      });
    }
  }

  getBerries = async () => {
    let berries = await axios.get("https://pokeapi.co/api/v2/berry");
    this.setState({
      berries: berries.data.results,
    });
  };

  handleChange = (e) => {
    this.setState({
      selectedValue: e.target.value,
    });
  };

  render() {
    const { selectedValue, berries, data } = this.state;
    const options = berries.map((elem) => {
      return <option value={elem.name}>{elem.name}</option>;
    });
    const berry = (berry) => {
      return (
        <>
          <li>{berry.name}</li>
          <li>{berry.firmness}</li>
        </>
      );
    };
    console.log(data);
    return (
      <div>
        <h1>Select a Type</h1>
        <select
          onChange={this.handleChange}
          value={selectedValue}
          name=""
          id=""
        >
          {options}
        </select>
        <ul>{this.state.berry ? berry(data) : ""}</ul>
      </div>
    );
  }
}

export default Berries;
