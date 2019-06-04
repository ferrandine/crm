import styled from "styled-components/macro";
import { rem } from "polished";
import { switchProp } from "styled-tools";

import { font, space, radius, color } from "const";

export const Button = styled.button`
  border: 1px solid #ededed;
  padding: ${space.base} ${space.base};
  font-weight: ${font.weight.bolder};
  font-size: ${rem(12)};
  border-radius: ${radius.big};
  color: ${color.grey.base};
  background: #fff;
  cursor: pointer;
  ${switchProp("type", {
    primary: "",
    secondary: {
      background: "white"
    }
  })};
`;
