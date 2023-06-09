import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import {MdOutlineDriveFileRenameOutline} from 'react-icons/md';
import {CiEdit} from 'react-icons/ci';



export const Wrapper = styled.div`
  position: relative;

`;

export const FilterList = styled.li`

  list-style: none;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 5px;
}
  /* justify-content: flex-start; */
  /* align-items: center; */
  /* flex-wrap: wrap; */
  /* gap: 12px; */

`;

export const Item = styled.li`
  display: flex;
`;

export const Button = styled(NavLink)`
/* list-style: none; */
border: none;
width: 100%;
color: #181515;
font-weight: 900;
  line-height: 1.35;
  letter-spacing: 0.04em;
  
  border-radius: 5px;
  transition: color 250ms linear, background-color 250ms linear;
      &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }

  &.active {
   color: #573131;
   background-color: #749574;
  }

`;
export const CommonLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap-reverse;
  gap: 12px;
 
`;
export const AuthLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
// const Change = ({ className }) => <MdOutlineDriveFileRenameOutline className={className} />;
export const BtnChange = styled.button`
  border: none;
  background-color: transparent;
`
export const StyledChange = styled(CiEdit)`
  color: red;
  
`