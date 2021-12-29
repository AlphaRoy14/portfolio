import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { siteShortTitle } from "../../config"
import MyImg from "../../content/favicon.png"
// content/favicon.png

const StyledLogo = styled.div`
  position: relative;
  z-index: 13;

  font-size: ${({ size }) => (size ? size : "1.75rem")};
  font-weight: 900;
  color: ${({ theme, color }) => theme.colors[color] || color};

  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`

const Logo = ({ size, color }) => (
  <StyledLogo color={color} size={size}>
    <img src={MyImg} height="60px" alt="A."/>
  </StyledLogo>
)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo
