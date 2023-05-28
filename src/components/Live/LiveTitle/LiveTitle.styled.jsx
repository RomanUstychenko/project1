import styled from 'styled-components';
import { NavLink } from "react-router-dom"


export const List = styled.div`
margin-top: 20px;
    text-align: center;
margin-left: auto;
margin-right: auto;
background-color: ${props => props.theme.colors.backgrondLive};

`
export const Link = styled(NavLink)`

color: ${props => props.theme.colors.titleLive};
text-decoration: none;
font-size: 35px;
font-family: ${props => props.theme.fonts.titleLive};

`