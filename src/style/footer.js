import styled from "styled-components";
import color, { padding } from "./config";

export const FooterWrapper = styled.div`
    background-color: ${color.primary};
    color: ${color.fourth};
`

export const FooterContainer = styled.div.attrs((props) => ({
    className: props.className || 'container',
}))`
    padding: ${padding.padding} 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
`

export const IconsFooter = styled.div`
    display: flex;
    gap: 0.5rem;
`
