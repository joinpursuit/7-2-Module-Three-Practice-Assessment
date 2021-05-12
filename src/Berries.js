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
    if (e.target.value === "") {
      this.setState({
        berry: false,
      });
    } else {
      this.setState({
        selectedValue: e.target.value,
      });
    }
  };

  render() {
    const { selectedValue, berries, data } = this.state;
    const options = berries.map((elem, i) => {
      return (
        <option key={i} value={elem.name}>
          {elem.name}
        </option>
      );
    });
    const berry = (berry) => {
      return (
        <div>
          <h4>{berry[0].name}</h4>
          <h4>{berry[0].firmness.name}</h4>
        </div>
      );
    };
    const flavors = (flavors) => {
      return flavors[0].flavors.map((elem, i) => {
        return <li key={i}>{elem.flavor.name}</li>;
      });
    };
    return (
      <div className="berries">
        <h1>Select a Type</h1>
        <select
          onChange={this.handleChange}
          value={selectedValue}
          name=""
          id=""
        >
          <option value=""> </option>
          {options}
        </select>
        {this.state.berry ? berry(data) : ""}
        <div>
          <ul>{this.state.berry ? flavors(data) : ""}</ul>
        </div>
      </div>
    );
  }
}

export default Berries;
