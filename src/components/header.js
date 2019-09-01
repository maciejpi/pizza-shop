import React from 'react';
import styled from 'styled-components/macro';

import { colors } from '../styles/variables';
import Layout from './layout';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: ${colors.red};
`;

const AppTittle = styled.h1`
  margin: 0;
  color: ${colors.white};
`;

const Header = () => (
  <StyledHeader>
    <Layout>
      <AppTittle>Pizza</AppTittle>
    </Layout>
  </StyledHeader>
);

export default Header;
