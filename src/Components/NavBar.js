import { NavLink } from "react-router-dom";
import Pokeball from "../assets/pokeball.jpeg"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="NavBarContainer">
      <NavLink to="/">
        <img src={Pokeball} alt="pokeball" />
      </NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="berries">Berries</NavLink>
    </nav>
  );
};

export default NavBar;
