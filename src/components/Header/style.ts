import styled from "styled-components";


export const Header = styled('header')`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    

    h1{
        font-size: 25px;
    }
    nav{
        display: flex;
        ul{
            display: flex;
            list-style: none;
            gap: 50px;  
        }
        a{
            text-decoration: none;
            font-size: 18px;
            color: #8884d8;
            &:hover{
                color: #82ca9d;
            }
        }
    }
    @media (max-width: 425px){
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
`