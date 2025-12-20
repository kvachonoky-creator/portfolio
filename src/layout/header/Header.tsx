import { Container } from "../../components/container/Container.ts";
import { FlexWrapper } from "../../components/flexWrapper/FlexWrapper.tsx";
import { HeaderMenu } from "../../components/menu/headerMenu.tsx";
import styled from "styled-components";
import {Icons} from "../../components/icons/Icons.tsx";
import {MobileMenu} from "../../components/menu/mobileMEnu.tsx";

export const Header = () => {

    const menuTitle = ["AboutMe", "Project", "Contacts"]

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <LogoLink href="#">
                        <Icons  iconId={"logo"} width={"300px"} height={"15px"} viewBox={"0 0 300 15"}/>
                    </LogoLink>
                    <HeaderMenu menuItem={menuTitle}/>
                    <MobileMenu menuItem={menuTitle}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding: 12px 0;
    min-height: 56px;

    

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`

const LogoLink = styled.a`
    display: flex;
    align-items: center;
`