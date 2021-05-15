import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/" className="logo">
        <img
          src="https://i.pinimg.com/736x/bf/d8/d7/bfd8d7704cf357fdc06f003e8bfdc272.jpg"
          alt="logo"
        ></img>
      </NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/berries">Berries</NavLink>
    </nav>
  );
};

export default NavBar;
