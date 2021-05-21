import { NavLink } from 'react-router-dom'

import "./NavBar.css"

const NavBar = () => {
    return(
        <nav className="navBar">
            <NavLink exact to="/">
                <img className="homeIcon" src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.L0RU1uObaW9NcCzrikBNVgHaEK%26pid%3DApi&f=1"} alt="Purple Butterfly Pokemon"/>
            </NavLink>
            <NavLink to="/pokemon">Pokemon</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/berries">Berries</NavLink>
        </nav>
    )
}

export default NavBar;

