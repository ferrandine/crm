import styled from "styled-components/macro";
import { rem } from "polished";

import { font, space, radius, color } from "const";

export const Select = styled.select`
  border: none;
  padding: ${space.base} ${space.base};
  font-weight: ${font.weight.bolder};
  font-size: ${rem(12)};
  border-radius: ${radius.big};
  color: ${color.grey.base};
  background: #fff;
`;
