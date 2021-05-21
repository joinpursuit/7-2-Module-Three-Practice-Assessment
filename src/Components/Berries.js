import { Component } from "react";
import axios from "axios";

class Berries extends Component {
    state = { berries: [], berryName: "", firmness: "" }

    selectedBerry = async (e) => {
        this.setState({berryName: e.target.value})
        try {
            const selectedBerry = e.target.value
            const res = await axios.get(`https://pokeapi.co/api/v2/berry/${selectedBerry}`)

            const berryFirm = res.data.firmness.name
            this.setState({ firmness: berryFirm })
        } catch (error) {
            console.log(error)
            this.setState({ berry: "", firmness: ""})
        }
    }

    getBerries = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/berry/")

            const berryArray = res.data.results
            this.setState({berries: berryArray})
        } catch (error) {
            console.log(error)
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

