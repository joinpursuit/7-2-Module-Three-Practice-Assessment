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


  // updateBerry = (e) => {
  //   this.setState({
  //     berry: e.target.value
  //   });
  // };


  // loadBerries = async () => {
  //   try {
  //     const res = await axios.get("https://pokeapi.co/api/v2/berry/");
  //     const berryArray = res.data.results;
  //     berryArray.map((berry) => {
        
  //       this.setState({ berries: berryArray })})
  //       this.setState((prevState) => ({ berry: prevState.berry, berry }))
  //       debugger;
  //   } catch (err) {
  //       console.log(err)
  //     this.state({ berries: [] });
  //   }
  // };
  loadBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/");
      const berryArray = res.data.results;
      // debugger;
      this.setState({ berries: berryArray });
    } catch (err) {
        console.log(err)
      this.state({ berries: [] });
    }
  };

  componentDidMount() {
    this.loadBerries();
  }

  render() {
    const { berries, berry, firmness } = this.state;

    return (
      <section >
        <h1>Select a Type</h1>
        <select value={berry} onChange={this.updateBerry}>
          <option></option>
          {berries.map((berry) => {
            //   debugger
            return (
              <option value={berry.name} key={berry.name}>
                {berry.name}
              </option>
            );
          })}
        </select>
          <h3>{berry} {firmness}</h3>
      </section>
    );
  }
}

export default Berries;

// unable to get key
// import { Component } from "react";
// // import uuid from "react-uuid";
// import axios from "axios";

// class Berries extends Component {
//   state = { berries: [], berry: "" };

//   updateBerry = (e) => {
//     this.setState((prevState) => ({
//       berry: e.target.value,
//     }));
//   };

//   loadBerries = async () => {
//     try {
//       const res = await axios.get("https://pokeapi.co/api/v2/berry");
//       //   const berryArray = res.data.results.map((berry, i) => {
//       //   });
//       //   this.setState({ berries: res.data.results });
//       const berryArray = res.data.results;
//       // debugger;
//       this.setState({ berries: berryArray });
//     } catch (err) {
//       this.state({ berries: [] });
//     }
//   };

//   componentDidMount() {
//     this.loadBerries();
//   }

//   render() {
//     const { berry, berries } = this.state;
//     const { name } = this.props;

//     return (
//       <section>
//         <h1>Select a Type</h1>
//         <select value={berry} onChange={this.updateBerry}>
//           <option value="">Select Berry</option>
//           {berries.map((berry, i) => {
//             //   debugger
//             return (
//               <option value={berry} key={berry}>
//                 {berry}
//               </option>
//             );
//           })}
//         </select>
//       </section>
//     );
//   }
// }

// export default Berries;

// Using Hooks
// import axios from "axios";
// import { useState } from "react";

// const Berries = () => {
//   const [berries, setBerries] = useState([]);
//   const [berry, setBerry] = useState("");
//   const loadBerries = async () => {
//     try {
//       const res = await axios.get("https://pokeapi.co/api/v2/berry");
//       const berryArray = Object.keys(res.data.message);
//       setBerries(berryArray);
//     } catch (err) {
//       setBerries([]);
//     }
//   };

// //   componentDidMount() {
// //       loadBerries();
// //   }

//   return (
//     <select value={berry}>
//       <h1>Berries</h1>
//       <option value="">Select Berries</option>
//       {berries.map((breed) => {
//           return <option value={berry} key={berry} > {berry} </option>
//       })}
//     </select>
//   );
// };

// export default Berries;
