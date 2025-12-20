import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type menuTitleProps = {
    menuItem: Array<string>
}

export const HeaderMenu = ({ menuItem }: menuTitleProps) => {
    return (
        <StyledDesktopMenu>
            <ul>
                {menuItem.map((item, index) => (
                    <ListItem key={index}>
                        <Link href={`#${item}`}>{item}</Link>
                    </ListItem >
                ))}
            </ul>
        </StyledDesktopMenu>
    );
};


const StyledDesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 48px;
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`

const ListItem = styled.li`

`

const Link = styled.a`
    font-family: Raleway;
    font-weight: 500;
    font-size: 18px;
    line-height: 156%;
    color: #25282b;
`