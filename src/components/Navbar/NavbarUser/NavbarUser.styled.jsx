import styled from 'styled-components';
import { NavLink } from "react-router-dom"
import {AiOutlineSetting} from 'react-icons/ai';

export const NavbarUserList = styled.div`
    display: flex;
    /* text-align: center; */
    align-items: center;
  justify-content: space-between;
    position: relative;
    margin-right: 5px;
    font-size: 15px;
    font-weight: 600;

`


export const NavbarUserName = styled.div`
display: flex;
width: 100%;
/* margin-left: auto;
margin-right: auto; */
align-items: center;
justify-content: center;
/* text-align: center; */
    /* font-size: 15px;
    font-weight: 600; */
`
export const NavbarUserSet = styled.div`
display: flex;
align-items: end;
    /* text-align: right; */
`
export const Welcome = styled.p`
    
`
export const UserName = styled.p`
/* text-align: center;
align-items: center; */
    font-size: 20px;
`

export const Setting = styled(AiOutlineSetting)`
    color: #291e1e;
    width:20px;
    &:hover, 
    :focus {
        color: #333d72;
    }
`

// import { device } from 'Device';

export const NavbarMenuList = styled.ul`
    display: flex;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    justify-content: center;
`
export const NavbarMenuListItem = styled.li`
    &:not(:last-child) {
    margin-right: 20px;
}
`
export const Link = styled(NavLink)`
    text-decoration: none;
    /* font-size: 40px; */
    /* font-weight: 700; */
    /* color: rgb(10, 3, 3); */
    /* &.active {
        padding-left: 5px;
        padding-right: 5px;
        color: white;
        background-color: #3f51b5;
        border-radius: 5px;
    } */
    &:hover, 
    :focus {
        color: #333d72;
    }
`