import styled from "styled-components";
import color from "./config";

export const HeaderWrapper = styled.div`
    background-color: ${color.primary};
    color: ${color.white};
    position: fixed;
    z-index: 99;
    width: 100%;
`

export const HeaderFlex = styled.header`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: ${props => props.gap ? '1rem' : '0.5rem'};
    font-size: 1.4rem;
    padding: 0.5rem 0;
`