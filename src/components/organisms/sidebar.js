import React from "react";
import styled from "styled-components";
import { ifProp } from "styled-tools";

import { space } from "../../const";

const SidebarStyle = styled.div`
  position: fixed;
  width: 30%;
  height: 100%;
  background: #fff;
`;

const Navbar = styled.ul`
  list-style: none;
`;

const NavbarLink = styled.li`
  display: block;
  margin-bottom: ${space.base};
  color: #9f9f9f;
  font-weight: bold;

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
