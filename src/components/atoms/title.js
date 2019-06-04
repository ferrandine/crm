import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { rem } from "polished";
import { switchProp } from "styled-tools";

import { color, space } from "const";

export const Title = styled(({ type, ...props }) => {
  return React.createElement(type, props);
})`
  color: ${color.grey.base};

  ${switchProp("type", {
    h3: {
      fontSize: rem(16),
      marginBottom: space.xxs
    }
  })}
`;

Title.defaultProps = {
  type: "h1"
};

Title.propTypes = {
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "div", "p"])
};
