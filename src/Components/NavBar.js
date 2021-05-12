import React from 'react'
import { NavLink } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav className="navBar">
            <NavLink exact to="/"><img value='Pokemon' alt="Pokemon" src="https://via.placeholder.com/50"/></NavLink>
            <NavLink to="/pokemon">Pokemon</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/berries">Berries</NavLink>   
        </nav>
    )
}

