import styled from "styled-components";
import color from "./config";

export const Button = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: none;
    border-radius: 5px;
    padding: 0.3rem;
    color: ${color.white};
    cursor: pointer;
    background-color: ${color.secondary};
`