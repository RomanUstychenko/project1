import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'Device';

export const ToLiveLinkList = styled.div`
margin-top: 10px;
margin-bottom: 15px;
    display: flex;
    flex-direction: row-reverse;
    @media ${device.tablet} {
        margin-top: 15px;
    };
`
export const ToLiveLink = styled(NavLink)`
    position: relative;
    top: 5px;
    right: 15px;
    font-weight: 900;
    color: #181515;
    &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
`