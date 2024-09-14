import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { Btn, TextBtn } from 'components/Button/Button.styled';
import { device } from 'Device';

export const NavbarSettingName = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 25px;
  @media ${device.tablet} {
    margin-left: 35px;
  }
`;
export const NavbarSettingLogo = styled.img`
  height: 35px;
`;
export const NavbarSettingSet = styled.div`
  display: flex;
  align-items: center;
`;
export const Welcome = styled.p``;
export const UserName = styled.p`
  font-size: 20px;
`;

export const NavbarMenuList = styled.ul`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;
export const NavbarMenuListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const SettingLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 10px;
`;
export const Setting = styled(AiOutlineSetting)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #050505;
  width: 30px;
  height: 30px;
  &:hover,
  :focus {
    color: #333d72;
  }
`;
export const ButtonLogout = styled(Btn)`
  margin-right: 15px;
`;
export const TextButton = styled(TextBtn)``;
