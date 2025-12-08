import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
display: flex;
    align-items: center;
    justify-content: space-around;
    background: yellow;
`