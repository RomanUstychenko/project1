import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ToLiveLinkList = styled.div`
    display: flex;
    flex-direction: row-reverse;

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