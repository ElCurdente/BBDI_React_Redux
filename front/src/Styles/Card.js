import styled from "styled-components";

const Card = styled.div`
background: #7664FB;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin : 10%;
padding : 10px;
width : 300px;
height : 50vh;
    h1 {
        font-size: 2rem;
        text-align : center;
    }
    div {
        display : flex;
        flex-direction : column;
        gap : 5px;
    }

`;

export default Card;