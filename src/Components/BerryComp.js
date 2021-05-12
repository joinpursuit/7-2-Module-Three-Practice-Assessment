import React, { Component } from 'react';
import Berries from "./Berries"
import BerryFirmness from "./BerryFirmness"

class BerryComp extends Component {
    state = { berry: "" }

    updateBerry =(e)=>{
        this.setState({berry: e.target.value})
    }

    render() {
        const {berry} = this.state

        return (
            <div>
                <Berries berry={berry} updateBerry={this.updateBerry} />
                <BerryFirmness berry={berry} />
            </div>
        );
    }
}

export default BerryComp;