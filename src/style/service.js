import styled from "styled-components";
import color, { padding } from "./config";

export const ServerWrapper = styled.div`
    padding-top:${props => props.padding && "9vh"};
`

export const ServiceContainer = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    padding: ${padding.padding} 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`

export const Header = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 0.5rem;
    font-size: 2.5rem;
    color: ${color.primary};
`

export const Card = styled.div`
    overflow: hidden;
    width: 100%;
    height: 30vh;
    text-align: center;
    direction: rtl;
    &:hover .details {
            opacity: 1;
    }
    img {
        width: 100%;
        height: 100%;
        padding: 0 1.5rem;
    }
    b {
        position: absolute;
        z-index: 5!important;
        bottom: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        transition: all 0.2s ease-in-out;
        padding: 0.5rem 0;
        cursor: pointer;
    }
    div {
        position: relative;
        width: 100vh;
        height: 100vh;
        background-color: #000;
    }
`
