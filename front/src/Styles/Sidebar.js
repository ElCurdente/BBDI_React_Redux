import styled from "styled-components";

const Sidebar = styled.div`
    height : 100vh;
    width : 20vw;
    border-right : 2px solid rgba( 255, 255, 255, 0.18 );
    background-color : rgba(47,47,47, 0.4);
    color : #fff;
    display : flex;
    flex-direction : column;
    align-items : center;
        a{
        text-decoration : none;
        color : #fff;
        font-size : 1.5rem;
        }

    h1 {
        font-size: 2rem;
        position : absolute;
        top : 10px;
        left : 10px;
    }
    nav {
        margin-top : 30%;
    li {
        list-style : none;
        margin : 2rem;
        margin-left : 0;
        width : 80%;
        padding : 10px 10px 8px 16px;
        border-radius : 5px;
        border : 1px solid rgba( 255, 255, 255, 0.18 );
        display : flex;
        flex-direction : row;
        align-items : center;
        justify-content : flex-start;
            svg{
            margin-right : 1.5em;
            }
    }
`;

export default Sidebar;