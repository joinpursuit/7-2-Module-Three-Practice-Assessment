import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css"
import pic from "../assets/pokeball4.png"

const NavBar = () => {
  return (
    <nav id="NavBar">
      <NavLink exact to="/">
        {/* try finding pokeball on the pokemon api site */}
        {/* link a photo in the assets directory */}
        <img id="pic" src={pic} alt="shouldBeAPokeBall"/>
      </NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/berries">Berries</NavLink>
    </nav>
  );
};

export default NavBar;
