import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/berries">Berries</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/pokemon">Pokemon</NavLink>
    </nav>
  );
};

export default NavBar;
