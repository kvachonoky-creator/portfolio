import styled from "styled-components";

type FlexWrapperProps = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    width?: string
    maxwidth?: string
    margin?: string
}


export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || null};
    justify-content: ${props => props.justify || null};
    align-items: ${props => props.align || null};
    flex-wrap: ${props => props.wrap || null};
    gap: ${props => props.gap || null};
    width: ${props => props.width};
    max-width: ${props => props.maxwidth};
    margin: ${props => props.margin};
`