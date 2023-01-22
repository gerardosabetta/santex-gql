import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  strong {
    font-weight: bold;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
