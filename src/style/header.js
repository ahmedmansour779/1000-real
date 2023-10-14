import styled from "styled-components";
import color from "./config";

export const HeaderWrapper = styled.div`
    background-color: ${color.primary};
    color: ${color.white} !important;
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
    gap: ${props => props.gap ? '1.5rem' : '0.5rem'};
    font-size: 1.4rem;
    padding: 0.5rem 0;
    text-shadow: ${props => props.shadow && `0px 0px 20px ${color.white}`};
    p {
        transition: 0.3s all ease-in-out;
        color: ${color.white} !important;
    }
    p:hover {
        text-shadow: 0px 0px 20px ${color.white};
    }
    span, p {
        cursor: pointer;
        color: ${color.white} !important;
    }
`