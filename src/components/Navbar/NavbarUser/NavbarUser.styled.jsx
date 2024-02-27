import styled from 'styled-components';
import { NavLink } from "react-router-dom"
import {AiOutlineSetting} from 'react-icons/ai';
import { Btn, TextBtn } from 'components/Button/Button.styled';

// export const NavbarUserList = styled.div`
//     display: flex;
//     /* text-align: center; */
//     align-items: center;
//   justify-content: space-between;
//     position: relative;
//     margin-right: 5px;
//     font-size: 15px;
//     font-weight: 600;

// `


export const NavbarUserName = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`
export const NavbarUserLogo = styled.img`
    height: 35px;
`
export const NavbarUserSet = styled.div`
display: flex;
align-items: center;

    /* text-align: right; */
`
export const Welcome = styled.p`
    
`
export const UserName = styled.p`
/* text-align: center;
align-items: center; */
    font-size: 20px;
`

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
export const SettingLink = styled(NavLink)`
    text-decoration: none;
    margin-right: 10px;
`
export const Setting = styled(AiOutlineSetting)`
display: flex;
  justify-content: center;
  align-items: center;
/* position: relative; */
/* top: 50%; */
/* left: 50%; */
/* transform: translate(-50%, -50%); */
/* margin: -50% 0 0 -50%; */
    color: #050505;
    width:30px;
    height: 30px;
    &:hover, 
    :focus {
        color: #333d72;
    }
`
export const ButtonLogout = styled(Btn)`
    margin-right: 15px;
`
export const TextButton = styled(TextBtn)`
    
`