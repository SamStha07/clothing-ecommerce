import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    padding: 20px 80px;

    @media screen and (max-width: 768px) {
      padding: 10px;
    }
  }

  * {
    box-sizing: border-box;
  }

  a {
     text-decoration: none;
     color: black;
  }

`;
