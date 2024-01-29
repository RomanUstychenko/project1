import styled from 'styled-components';
import { NavLink } from "react-router-dom"
import { FaHome } from "react-icons/fa";

export const Home = styled(FaHome)`
      /* position: absolute;
    left: 15px; */

    /* color: #c4b210; */
    
`
export const NavbarAuthList = styled.ul`
    display: flex;
    position: absolute;
    right: 15px;
    /* margin-right: auto; */
    /* margin-left: auto; */
    /* align-items: center; */
    /* justify-content: center; */


`
export const Link = styled(NavLink)`
    text-decoration: none;
    font-size: inherit;
    font-weight: 700;
   color: inherit;
  
    &.active
     {   
        color: ${props => props.theme.colors.navActive};
    }
    &:hover, 
    :focus {
        color: ${props => props.theme.colors.navActive};
    }

`
export const LinkHome = styled(Link)`
    font-size: 25px;
    margin-left: 15px;
     align-items: center;
    justify-content: center;
`
export const NavbarAuthListItem = styled.li`
     &:first-child {
      
}
color: rgb(10, 3, 3);
font-size: 20px;
    &:not(:last-child) {
    margin-right: 20px;
    /* position: absolute; */
    /* right: 15px; */
}
&:last-child {
    /* margin-right: 20px; */
    /* position: absolute;
    right: 15px; */
}
`