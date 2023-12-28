import styled from "styled-components";

export const Form = styled('form')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    min-height: calc(100vh - 170px);

    select{
        border: 1px solid #c4c4c4c4;
        border-radius: 10px;
        padding: 10px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
    }
    button{
        border: 1px solid #c4c4c4c4;
        border-radius: 10px;
        padding: 10px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
        background-color: #82ca9d;
        transition: all 0.2s ease-in-out;

        &:hover{
            transform: scale(1.2);
            background-color: #8884d8;
        }
    }
`