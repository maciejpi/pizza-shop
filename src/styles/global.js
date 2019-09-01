import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components/macro';

import { font } from './helpers';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font: ${font()};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font: ${font({ size: 'heading' })};
  }
  h2 {
    font: ${font({ size: 'large' })};
  }
`;

export default GlobalStyle;
