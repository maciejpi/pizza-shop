import React from 'react';
import styled from 'styled-components/macro';

const PageWidth = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const Layout = ({ children }) => <PageWidth>{children}</PageWidth>;

export default Layout;
