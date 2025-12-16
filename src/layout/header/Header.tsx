import { Container } from "../../components/container/Container.ts";
import { FlexWrapper } from "../../components/flexWrapper/FlexWrapper.tsx";
import { Menu } from "../../components/menu/Menu.tsx";
import styled from "styled-components";
import {Icons} from "../../components/icons/Icons.tsx";
// import {topBorder} from "../../assets/img/yellow-bg.svg"

export const Header = () => {

    const menuTitle = ["About", "Project", "Contacts"]

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <LogoLink href="#">
                        <Icons  iconId={"logo"} width={"300px"} height={"15px"} viewBox={"0 0 300 15"}/>
                    </LogoLink>
                    <Menu menuItem={menuTitle}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding: 12px 0;
    
    position: relative;
    
    &::after {
        position: absolute;
        content: "";
        //background-image: url("../../assets/img/yellow-bg.svg");
        //top: 0;
        //right: 0;
        //width: 100%;
        //height: 100%;
        
    }
    //position: fixed;
    //top: 0;
    //left: 0;
    //right: 0;
    //z-index: 999;
`

const LogoLink = styled.a`
    display: flex;
    align-items: center;
`