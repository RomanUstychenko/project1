import styled from 'styled-components';



export const List = styled.div`
display: flex;
padding-top: 20px;
    text-align: center;
margin-left: auto;
margin-right: auto;
/* background-color: ${props => props.theme.colors.backgrondLive}; */

`
export const Link = styled.p`

color: ${props => props.theme.colors.titleLive};
text-decoration: none;
font-size: 35px;
font-family: ${props => props.theme.fonts.titleLive};

`

export const Img = styled.img`
height: 40px;
`