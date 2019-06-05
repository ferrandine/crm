import { Link } from "@reach/router";
import styled from "styled-components/macro";

export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  &[aria-current] {
    font-weight: 500;
  }
`;
