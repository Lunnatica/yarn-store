import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  /* Reset CSS */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  /* Global Styles */

  ${normalize}

  :root {
    ${colors}

    --font-primary: "Inter", sans-serif;
    --layout-width: 954px;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-primary);
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--colors-darkBlue);
  }
`;

export default GlobalStyles;
