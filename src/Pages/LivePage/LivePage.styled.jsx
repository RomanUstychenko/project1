import styled from 'styled-components';



export const LiveWrapper = styled.div`
    
    background-color: ${props => props.theme.colors.backgrondLive};
`
export const List = styled.div`
padding-top: 10px;
/* color: #ffffff; */
font-family:  ${props => props.theme.fonts.mainLive};
/* background-color: ${props => props.theme.colors.backgrondLive}; */
`
export const Menu = styled.h2`
    font-size: 35px;
`
export const ListCategory = styled.div`

color: ${props => props.theme.colors.mainTextLive};
font-family:  ${props => props.theme.fonts.mainLive};
/* background-color: ${props => props.theme.colors.backgrondLive}; */
display: flex;
scrollbar-width: none;
position: sticky;
top: 0px;
padding-left: 5px;
padding-right: 5px;


overflow-y: hidden;
    overflow-x: auto; 
     justify-content: flex-start;
    box-sizing: border-box;

`


