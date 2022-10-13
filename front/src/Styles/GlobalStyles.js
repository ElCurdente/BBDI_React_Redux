import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #2f2f2f;
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