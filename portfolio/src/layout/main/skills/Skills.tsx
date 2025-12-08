import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Icons} from "../../../components/icons/Icons.tsx";

export const Skills = () => {
    return (
        <Container>
            <SectionTitle title={"Skills"}/>
            <FlexWrapper>
                <Icons iconId={"bootstrap"}/>
                <Icons iconId={"git"}/>
                <Icons iconId={"react"}/>
                <Icons iconId={"sass"}/>
                <Icons iconId={"redux"}/>
                <Icons iconId={"css"}/>
                <Icons iconId={"html"}/>
                <Icons iconId={"js"}/>
                <Icons iconId={"typescript"}/>
                <Icons iconId={"webstorm"}/>
                <Icons iconId={"greensock"}/>
                <Icons iconId={"bootstrap"}/>
            </FlexWrapper>
        </Container>
    );
};


const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 74px;
    background-color: red;
`