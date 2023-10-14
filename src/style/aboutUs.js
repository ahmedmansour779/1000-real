import styled from "styled-components";
import color, { padding } from "./config";

export const AboutUsWrapper = styled.div`
    background-color: ${color.primary};
    color: ${color.white};
    padding: ${padding.padding} 0;
    padding-top: ${props => props.padding && "11vh"};
    background-color: ${props => props.background && `${color.white}`};
    color: ${props => props.colorText && `${color.primary}`};
`

export const AboutContainer = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

export const Header = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 0.5rem;
    font-size: 2.5rem;
`

export const Body = styled.div`
    text-align: right;
    direction: rtl;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.5rem;
`