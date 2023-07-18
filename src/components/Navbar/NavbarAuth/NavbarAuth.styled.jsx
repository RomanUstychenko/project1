import styled from 'styled-components';
import { NavLink } from "react-router-dom"

export const NavbarAuthList = styled.ul`
    display: flex;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    justify-content: center;


`
export const Link = styled(NavLink)`
    text-decoration: none;
    font-size: inherit;
    font-weight: 700;
   color: inherit;
  
    &.active {
        padding-left: 5px;
        padding-right: 5px;
        color: white;
        background-color: #3f51b5;
        border-radius: 5px;
    }
    &:hover, 
    :focus {
        color: #333d72;
    }

`
export const NavbarAuthListItem = styled.li`
     &:first-child {
    color: #c4b210;
    font-size: 15px;
}
color: rgb(10, 3, 3);
font-size: 20px;
    &:not(:last-child) {
    margin-right: 20px;
}
`