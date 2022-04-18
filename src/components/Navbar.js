import React from "react";
import logo from "../images/pokemon-logo.png";

const Navbar = () => {

  return (
    <nav>
      <div>
        <img src={logo} alt="pokeapi-logo" className="navbar-image" />
      </div>
    </nav>
  );
};

export default Navbar;
