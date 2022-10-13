import styled from "styled-components";

const Sidebar = styled.div`
    height : 100vh;
    width : 15vw;
    border-right : 1px solid rgba( 255, 255, 255, 0.18 );
    background-color : #2A3656;
    color : #fff;
    display : flex;
    flex-direction : column;
    align-items : center;
        a{
        width : 100%;
        text-decoration : none;
        color : #fff;
        font-size : 1rem;
        font-family : 'gilroy', sans-serif;
        font-weight : 500;
        display : flex;
        justify-content : flex-start;
        align-items : center;
        gap : 10px;
        padding : 10px 16px 10px 16px;
        border-radius : 10px;
        }

        .active {
        background-color : #7664FB;
        }

    h1 {
        margin-top : 20px;
        font-size: 2rem;
        font-family : 'gilroy', sans-serif;

    }
    nav {
        margin-top : 30%;
    }
    ul {
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }    
    li {
        list-style : none;
        display : flex;
        flex-direction : row;
        align-items : center;
        justify-content : flex-start;
    }
`;

export default Sidebar;