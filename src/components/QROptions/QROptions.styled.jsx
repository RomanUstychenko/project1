import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'Device';


export const ToLiveLink = styled(NavLink)`
    /* position: relative;
    top: 35px;
    right: 15px; */
    font-weight: 900;
    color: #181515;
    &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
`

export const NavbarWrap = styled.div`
    /* margin-top: 10px;  */
    text-align: end;
    min-width: 150px;
    position: absolute;
    top:calc(5px + ${props => props.theme.size.navbarHeightMobile});
    right: 15px;
    @media ${device.tablet} {
      top:calc(5px + ${props => props.theme.size.navbarHeightTablet});
  };
  @media ${device.desktop} {
      top:calc(5px + ${props => props.theme.size.navbarHeightDesktop});
  };
`

 export const CreateQr = styled.p`
 margin-top: 10px;
  font-weight: bold;
  
      &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
  @media ${device.tablet} {
    
    };
 `