import styled from 'styled-components';
import { device } from 'Device';
import { NavLink } from 'react-router-dom';
// import {MdOutlineDriveFileRenameOutline} from 'react-icons/md';
import {CiEdit} from 'react-icons/ci';
import {MdDeleteForever} from 'react-icons/md';
import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown  } from "react-icons/md";



export const Wrapper = styled.div`
  position: relative;

`;

export const FilterList = styled.li`

  list-style: none;
  display: flex;
  /* &:not(:last-child) { */
    margin-bottom: 5px;
/* } */
  /* justify-content: flex-start; */
  /* align-items: center; */
  /* flex-wrap: wrap; */
  /* gap: 12px; */
  &:last-child {
    /* width: 72%; */

    };
`;

export const Item = styled.li`
  display: flex;
`;

export const Button = styled(NavLink)`
word-wrap: break-word;
padding-left: 5px;

box-sizing: border-box;
/* list-style: none; */
border: none;
width: 60%;
color: #181515;
font-size: 20px;
font-weight: 900;
  line-height: 1.35;
  letter-spacing: 0.04em;
  border-radius: 5px;
  transition: color 250ms linear, background-color 250ms linear;
  ${FilterList}:first-child & {
    width: 72%;
    @media ${device.tablet} {  
        width: 100%;
    };
    };
    ${FilterList}:last-child & {
    width: 72%;
    @media ${device.tablet} {  
        width: 100%;
    };
    };
      &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }

  &.active {
   color: #573131;
   background-color: #749574;
  }

  @media ${device.tablet} {  
        width: 100%;
    };
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
  padding: 0;
`
export const StyledChange = styled(CiEdit)`
width:  25px;
height: 25px;

  color: red;
  &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
  
`
export const DelSection = styled(MdDeleteForever)`
  color: red;
  
`
export const MoveButtonSection = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
`
export const MoveUpSection = styled(MdOutlineKeyboardDoubleArrowUp)`
  height: 20px;
    width: 20px;
`
export const MoveDownSection = styled(MdOutlineKeyboardDoubleArrowDown)`
height: 20px;
    width: 20px;
`