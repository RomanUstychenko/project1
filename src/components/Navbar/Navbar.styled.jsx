import styled from 'styled-components';
import { device } from 'Device';

export const NavbarTitles = styled.nav`
    padding-top: 5px;
    padding-bottom: 5px;
    height: ${props => props.theme.size.navbarHeightMobile};
    /* border: 1px solid ; */
    border-radius: 3px;
    background-color: ${props => props.theme.colors.navbarUser};
    display: flex;


    position: fixed;
    top: 0px;
    /* left: 0px; */
    width: 100%;
    z-index: 10;
    @media ${device.mobileOnly} {
   left: 0px;
};

    @media ${device.tablet} {
        height: ${props => props.theme.size.navbarHeightTablet};
        width: 768px;
};
    @media ${device.desktop} {
        height: ${props => props.theme.size.navbarHeightDesktop};
        width: 100%;
};
`
    

export const NavbarList = styled.div`
    display: flex;
    width: 100%;
`