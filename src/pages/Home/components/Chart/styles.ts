import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
    width: 40% !important;

    @media(max-width: 1024px){
        width: 100% !important;

    }
    @media(max-width: 425px){
        font-size: 12px;
        padding: 10px;
    }
`