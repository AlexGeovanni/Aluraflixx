import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    table,th,td{
        border-collapse: collapse;
    }
`;


export default GlobalStyle;

