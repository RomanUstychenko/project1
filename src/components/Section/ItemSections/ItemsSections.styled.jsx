import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {MdOutlineDriveFileRenameOutline} from 'react-icons/md';


export const Wrapper = styled.div`
  position: relative;

`;

export const FilterList = styled.li`

  list-style: none;
  /* display: flex; */
  /* justify-content: flex-start; */
  /* align-items: center; */
  /* flex-wrap: wrap; */
  /* gap: 12px; */

`;

export const Item = styled.li`
  display: flex;
`;

export const Button = styled(NavLink)`
color: white;
  line-height: 1.35;
  letter-spacing: 0.04em;
  
  /* padding: 8px 28px; */
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus {
   
    cursor: pointer;
  }
  &.active {
   
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
const Change = ({ className }) => <MdOutlineDriveFileRenameOutline className={className} />;

export const StyledChange = styled(Change)`
  
`