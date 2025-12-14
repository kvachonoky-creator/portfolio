import styled from "styled-components";

type menuTitleProps = {
    menuItem: Array<string>
}

export const Menu = ({ menuItem }: menuTitleProps) => {
    return (
        <StyledMenu>
            <ul>
                {menuItem.map((item, index) => (
                    <ListItem key={index}>
                        <Link href={`#${item}`}>{item}</Link>
                    </ListItem >
                ))}
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 48px;
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