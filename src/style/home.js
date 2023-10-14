import styled from "styled-components";
import image from "../shared/home.jpeg";
import color from "./config";

export const HomeWrapper = styled.div`
    color: ${color.primary};
    padding-top: 9vh;
    background-image: url(${image});
    height: 91vh;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
`

export const HomeContainer = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    transform: translate(0vw, 30vh);
    gap: 4rem;
    align-items: center;
`

export const Buttons = styled.div`
    display: flex;
    gap: 2.5rem;
`

export const Button = styled.a`
    font-size: 1rem;
    padding: 1rem;
    background: transparent;
    border: 1px ${color.fourth} solid;
    border-radius: 10px;
    color: ${color.fourth} !important;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    &:hover {
        color: ${color.white} !important;
        background-color: ${color.secondary};
    }
`

export const Text = styled.div`
    color: ${color.fourth};
    text-align: center;
    line-height: 2;
    font-size: 1rem;
    word-spacing: 0.5rem;
`