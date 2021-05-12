import axios from 'axios';
import React, { Component } from 'react';

class LocationsComp extends Component {
    state = { locations: [], showLocations: true }

     showOrHideLocations = () => {
        this.setState((prevState) => ({ showLocations: !prevState.showLocations }));
      };

    handleClick = async() => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/location`)
            this.setState((prevState) => ({ showLocations: !prevState.showLocations, locations: res.data.results })) 
            console.log(res.data.results)
        } catch (error) {
            console.log(error)
            this.setState({locations: []})
        }
    }

    // componentDidMount(){
    //     this.handleClick()
    // }

    render() {
        console.log(this.state)
       if(this.state.showLocations) {
           return(
            <div>
            <h1>List of Locations</h1>
            <button type="button" onClick={this.handleClick}>Show Locations</button>
            <ul>  </ul>
        </div>  
           )
       } else {
        return (
          <div>
              <h1>List of Locations</h1>
              <button type="button" onClick={this.handleClick}>Hide Locations</button>
              <ul> 
              {this.state.locations.map(location=>{
                 return <li key={location.name}>{location.name}</li>
              })}
              </ul>
          </div>  
        );
    }
}
}

export default LocationsComp;