import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
    font-family: 'Roboto', sans-serif;
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
     transition: all 0.25s linear; 


     a {
      text-decoration: none;
      color: inherit;
     }

     * {
      box-sizing: border-box;
     }
  }
`