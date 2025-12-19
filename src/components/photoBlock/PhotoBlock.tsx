
import topBorder from "../../assets/img/topBorder.svg"
import topBorderBlack from "../../assets/img/topBorder-mask.svg?url"

import photo from "../../assets/img/photo.webp"
import styled from "styled-components";

export const PhotoBlock = () => {
    return (
        <StyledPhotoBlock>
            <PhotoBackground/>
            <Photo src={photo} alt="My photo"/>
        </StyledPhotoBlock>
    );
};

const StyledPhotoBlock = styled.div`
    position: absolute;
    top: -60px;
    right: 0;
    max-width: 720px;
    width: 100%;
    max-height: 629px;
    height: 100%;
`

const PhotoBackground = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:  url("${topBorder}");
    background-repeat: no-repeat;
    background-size: 105% 105%;
    background-position: 2.5% 2.5%;
    z-index: -1;
    
`


const Photo = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    mask-image: url("${topBorderBlack}");
    mask-repeat: no-repeat;
    mask-size: 105% 105%;
    object-position: center;
    object-fit: cover;


`