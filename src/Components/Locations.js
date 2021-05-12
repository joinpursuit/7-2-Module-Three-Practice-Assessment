import axios from "axios";
import { Component } from "react";

class Locations extends Component {
  state = { locations: [], show: "Show Locations" };

//   toggle = () => {
//     const { show } = this.state;
//     if (show === "Hide Locations") {
//       this.setState({ show: "Show Locations" });
//     } else if (show === "Show Locations") {
//       this.setState({ show: "Hide Locations" });
//     }
//   };

  loadLocations = async () => {
      const { show } = this.state;
     if (show === "Show Locations") {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/location");
        this.setState({ locations: res.data.results, show: "Hide Locations" });
      } catch (err) {
        this.setState({ locations: [] });
      }
    } else {
      this.setState({ locations: [], show: "Show Locations" });
    }
  };

  //   loadLocations = () => {
  //       const { show } = this.setState;
  //     this.toggle();
  //     if ( show === "show") {
  //         this.getLocations();
  //     } else {
  //         this.setState({ locations: ["Happy"] });
  //     }

  //   }

  render() {
    const { locations, show } = this.state;
    //   console.log(this.state)
    return (
      <section className="section">
        <h1>List of Locations</h1>
        <ul>
          {locations.map((location) => {
            // debugger
            return <li key={location.name}>{location.name}</li>;
          })}
        </ul>
        <button onClick={this.loadLocations}>{show}</button>
      </section>
    );
  }
}

export default Locations;
