import React from "react";
import styled from "styled-components";
import { ifProp } from "styled-tools";

import { space } from "const";

const SidebarStyle = styled.div`
  width: 25%;
  height: 100vh;
  background: #fff;
`;

const Navbar = styled.ul`
  padding-left: 3rem;
  padding-top: 15rem;
  list-style: none;
`;

const NavbarLink = styled.li`
  display: block;
  margin-bottom: ${space.base};
  color: #9f9f9f;

  ${ifProp("active", "color: black;")}
`;

export const Sidebar = () => {
  return (
    <SidebarStyle>
      <Navbar>
        <NavbarLink>Accueil</NavbarLink>
        <NavbarLink active>Couturiers</NavbarLink>
        <NavbarLink>Clients</NavbarLink>
      </Navbar>
    </SidebarStyle>
  );
};
