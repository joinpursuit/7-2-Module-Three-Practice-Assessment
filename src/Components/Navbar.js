import { NavLink } from "react-router-dom";
import "../index.css"

const NavBar = () => {

    //NavLink different than link, because it gains a CSS class called .active (to maintain current active link)
    return (
        <nav className="NavBarContainer">
            <NavLink exact to="/"><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokeball-games-video-casino-gamer-1-42381.png" alt="pokeball" /></NavLink>
            <NavLink to="/pokemon">Pokemon</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/berries">Berries</NavLink>
            
        </nav>
    )
}

export default NavBar;

//cmd + d + d; select all