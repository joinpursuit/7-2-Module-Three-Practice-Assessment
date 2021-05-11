import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/"><img className='logo' src='Images/pokeball.png'/></NavLink>
            <NavLink to="/pokemon">Pokemon</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/berries">Berries</NavLink>
        </nav>
    )
}

export default NavBar;