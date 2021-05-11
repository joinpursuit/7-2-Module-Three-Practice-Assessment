import React from "react"
import "./navBar.css"
import piplup from "./piplup.jpg"
import pokeball2 from "./pokeball2.png"
import { NavLink } from 'react-router-dom'

const NavBar = () => {


    return (
        <nav className="nav-bar"> 
        <a href="/">
        <img src={pokeball2} alt="piplup"/>
        </a>
       
        <NavLink exact to="/"></NavLink>
        <NavLink to="pokemon">Pokemon</NavLink>
        <NavLink to="locations">Locations</NavLink>
        <NavLink to="berries">Berries</NavLink>
        </nav>
    )
}

export default NavBar