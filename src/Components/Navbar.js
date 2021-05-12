import { NavLink } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return(
        <nav className="NavBarContainer">
            <NavLink to={"/"}><img src="https://lh3.googleusercontent.com/proxy/tx3yDScQBQiu4_oprDWav3xPFwk4pr7PlXJovILi4OLewgSHP2YTwgOX-UNsGFFF9MqT89bPV1Ktell9WSGBCVY9EiMixiEZuok-UgxyUeg0yrAt5HQNLPkLDJFqZaNjT_OdsA"/></NavLink>
            <NavLink to="/pokemon">Pokemon</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/berries">Berries</NavLink>
        </nav>
    )
}

export default NavBar; 