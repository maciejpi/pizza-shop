import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { colors } from '../styles/variables';
import { PageWidthStyles } from '../styles/common';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${colors.red};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
`;

const AppTittle = styled.h1`
  ${PageWidthStyles}
  color: ${colors.white};
`;

const Header = ({ path, isExact }) => (
  <StyledHeader>
    {!path !== '/' && isExact ? (
      <AppTittle>
        <StyledLink to="/">Order a pizza</StyledLink>
      </AppTittle>
    ) : (
      <AppTittle>Order a pizza</AppTittle>
    )}
  </StyledHeader>
);

export default Header;
