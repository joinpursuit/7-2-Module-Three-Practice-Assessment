import { NavLink } from "react-router-dom";
import "../Styles/NavBar.css"

const NavBar = () => {
  return (
    <nav id="NavBar">
      <NavLink exact to="/">
        {/* try finding pokeball on the pokemon api site */}
        {/* link a photo in the assets directory */}
        <img src="http://placekitten.com/50"/>
      </NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/berries">Berries</NavLink>
    </nav>
  );
};

export default NavBar;
