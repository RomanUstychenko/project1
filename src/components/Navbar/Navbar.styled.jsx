import styled from 'styled-components';
import { device } from 'Device';

export const NavbarTitles = styled.nav`
    padding-top: 5px;
    padding-bottom: 5px;
    height: ${props => props.theme.size.navbarHeightMobile};
    /* border: 1px solid ; */
    border-radius: 3px;
    background-color: #749574;
    display: flex;
    @media ${device.tablet} {
        height: ${props => props.theme.size.navbarHeightTablet};
};
    @media ${device.desktop} {
        height: ${props => props.theme.size.navbarHeightDesktop};
};
`
    

export const NavbarList = styled.div`
    display: flex;
    width: 100%;
`