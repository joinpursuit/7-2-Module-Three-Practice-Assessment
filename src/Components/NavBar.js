import { NavLink } from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavContainer">
            <NavLink to={'/'}><img src="https://www.logolynx.com/images/logolynx/aa/aaa4f664fa88bfbbe7004f9b6c97db2e.png" alt='pokeball'/></NavLink>
            <NavLink to={'/pokemon'}>Pokemon</NavLink>
            <NavLink to={'/Locations'}>Locations</NavLink>
            <NavLink to={'/Berries'}>Berries</NavLink>
        </nav>
    )
}

export default NavBar;