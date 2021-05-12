import React, { Component } from 'react';
import axios from "axios"
import "./NavBar.css"

class BerryFirmness extends Component {
    state = { firmness: "", flavors: [] }

    getBerryFeatures = async() =>{
        try {
            const {berry} = this.props
            const res = await axios.get(`https://pokeapi.co/api/v2/berry/${berry}/`)
            this.setState({firmness: res.data.firmness, flavors: res.data.flavors })       
        } catch (error) {
            console.log(error)
            this.setState({firmness: "", flavors: []})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const oldBerry = prevProps.berry;
        const newBerry = this.props.berry
        if(oldBerry !== newBerry) {
          
            this.getBerryFeatures()
            
        }
    }


    render() {
        const {berry} = this.props
        const {firmness, flavors} = this.state
        return (
            <section>
                <h2>{berry}</h2>
                <h2>{firmness.name}</h2>
                <ul>
                {flavors.map(flavor=>{
                    return <li key={flavor.flavor.name}>{flavor.flavor.name}</li>
                })}
                </ul>
            </section>
        );
    }
}

export default BerryFirmness;