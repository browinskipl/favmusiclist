import React from "react";
import LanguageButton from "../LanguageButton/LanguageButton";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">FavMusicList</NavbarBrand>
        <LanguageButton />
      </Navbar>
    </div>
  );
};

export default Header;
