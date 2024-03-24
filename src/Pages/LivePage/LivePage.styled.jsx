import styled from 'styled-components';


export const List = styled.div`
color: #ffffff;
font-family:  ${props => props.theme.fonts.mainLive};
background-color: ${props => props.theme.colors.backgrondLive};
`
export const Menu = styled.h2`
    font-size: 35px;
`
export const ListCategory = styled.div`

color: ${props => props.theme.colors.mainTextLive};
font-family:  ${props => props.theme.fonts.mainLive};
background-color: ${props => props.theme.colors.backgrondLive};
display: flex;

position: sticky;
top: 0px;
padding-left: 5px;
padding-right: 5px;


overflow-y: hidden;
    overflow-x: auto; 
     justify-content: flex-start;
    box-sizing: border-box;

`

export const ListCategoryItem = styled.a`
margin-top: 10px;
    display: inline-block;
    color: white;

    background: #3b3c3d;
    transition: all .3s ease;
    border-radius: 24px;
    padding: 8px 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    flex-shrink: 0;
    cursor: pointer;
    &:not(:last-child) {
margin-right:10px ;
    }




 /* &.active {
   color: red;
 };
 &:hover, 
    :focus {
        color: red;
    } */
`
