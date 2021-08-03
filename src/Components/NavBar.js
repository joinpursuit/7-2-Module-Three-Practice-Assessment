import { NavLink } from "react-router-dom";
import pic from "../assets/pokeball4.png"
import "../Styles/NavBar.css"

const NavBar = () => {
  return (
    <nav id="NavBar">
      <NavLink exact to="/">
        {/* can't go pass src/ directory  */}
        <img id="pic" src={pic} alt="shouldBeAPokeBall"/>
      </NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/berries">Berries</NavLink>
    </nav>
  );
};

export default NavBar;
