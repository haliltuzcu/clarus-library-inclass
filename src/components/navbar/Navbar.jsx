import React from "react";
import { Logo, Menu, MenuLink, Nav } from "./Navbar.style";

const Navbar = () => {
  return (
    <Nav justify="space-between">
      <Logo to="/">OGH Library</Logo>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
