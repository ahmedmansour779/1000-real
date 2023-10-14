import styled from "styled-components";
import color from "./config";

export const ModelWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: #000;
    opacity: 0.8;
`

export const Model = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${props => props.display ? 'flex' : 'none'};
    flex-direction: column;
    align-items: flex-start;
    direction: rtl;
    z-index: 101;
    color: ${color.white};
    background: ${color.primary};
    padding: 1rem;
    border-radius: 10px;
    button {
        border: none;
        margin-bottom: 2rem;
        color: #353535;
        transition: 0.3s all ease-in-out;
        border: none;
        background: transparent;
        &:hover {
            color: #000;
        }
    }
    h3 {
        text-align: center;
        width: 100%;
        margin-bottom: 3rem;
    }
    p {
        font-size: 0.9rem;
        line-height: 1.6rem;
        padding: 0 2rem 0.5rem 2rem;
        word-spacing: 0.3rem;
    }
`