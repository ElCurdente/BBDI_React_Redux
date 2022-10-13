import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'gilroy', sans-serif;
        background-color: #2A3656;
        color: #fff;
        display : flex;
        flex-direction : row;
    }

h1 {
    font-size: 2rem;
}
p {
    font-size: 1.5rem;
}
`;


export default GlobalStyles;