import styled from "styled-components";

export const Container = styled('main')`
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

    @media(max-width: 425px){
        min-height: calc(100vh - 250px);
        padding: 10px;

        h2{
            font-size: 23px;
        }
    }

`