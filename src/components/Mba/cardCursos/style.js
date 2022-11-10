import styled from "styled-components";

const Card = styled.div`
    width: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 230px;

    background-color: #2541C0;

    h3{
        font-size: 32px;
        font-family: barlow;
        margin-bottom: 0px;
    }

    p{
        color: black;
        font-size: 22px;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    button{
        margin-top: 10px;
        padding: 10px;
        border-radius: 50px;
        border: 0;
        box-shadow: 0 0 1px 0 black;
    }
    button:hover{
        box-shadow: 1px 1px 1px 1px black;
        cursor: pointer;
    }

`;

export {Card};