import React from "react";
import styled from "styled-components";
import { ifProp } from "styled-tools";
import { Link } from '@reach/router';
import { space } from "const";

const View = styled.div`
  background: #e16a4b;
  width: 245px;
`;

const Navbar = styled.ul`
  display: grid;
  row-gap: ${space.base};
  list-style: none;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  ${ifProp("active", "font-weight: 500;")}
`;

export const Sidebar = () => {
  return (
    <View>
      <Navbar>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/sewers">Couturiers</NavLink>
        <NavLink to="/customers">Clients</NavLink>
      </Navbar>
    </View>
  );
};
