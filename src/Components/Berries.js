import { Component } from "react";
import axios from "axios";

class Berries extends Component {
    state = { berries: [], berryName: "", firmness: "" }

    selectedBerry = async (e) => {
        this.setState({berryName: e.target.value})
        try {
            const selectedBerry = e.target.value
            const res = await axios.get(`https://pokeapi.co/api/v2/berry/${selectedBerry}`)
            // debugger
            const berryFirm = res.data.firmness.name
            this.setState({ firmness: berryFirm })
        } catch (error) {
            // console.log(error)
            this.setState({ berry: "", firmness: ""})    
        }
    }

    // https://pokeapi.co/api/v2/berry/

    getBerries = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/berry/")
            // debugger
            const berryArray = res.data.results 
            this.setState({berries: berryArray})
        } catch (error) {
            // console.log(error)
            this.setState({berries: []})
        }
    }

    componentDidMount() {
        this.getBerries();
    } 


    render() {
        const { berries, firmness, berryName } = this.state;

        return(
            <div>
                <h1>Select a Type</h1>
                <select className="pokemonBerries" onChange={this.selectedBerry}>
                    <option value="" ></option>
                    {berries.map((berry) => {
                        return <option value={berry.name} key={berry.name}>{berry.name}</option>
                    })}
                </select>
               <h3> {berryName}  {firmness} </h3>
            </div>
        )
    }
}

export default Berries;

// - Displays the header "Select a Type" above a dropdown menu, centered.
// - The dropdown menu should display a list of the berries available at `https://pokeapi.co/api/v2/berry/` (this will give the first 20 berries, by default).
// - When a berry is chosen from the dropdown menu, the
//   - `name`
//   - `firmness`
//     should display below it.
// - **CHALLENGE - NOT REQUIRED** show a list of `flavor.flavor.name`
// - In this route, there should be no "Submit" button.
// - Selection from the dropdown menu should submit the user's input automatically.
// - New inputs should replace the previously displayed information.