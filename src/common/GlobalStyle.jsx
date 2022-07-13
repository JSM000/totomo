import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-beige: #d4d4c7;
        --color-green: #25b5aa;
        --color-blue: #00b9ef;
        --color-pink: #f6bbbd;
        --color-red: #f19ca3;
        --color-grey: #58716D
    }
    * {
        box-sizing: border-box;
    }

    body {
      margin: 0%;
      background-color: var(--color-beige)
    }
`;
