import styled from 'styled-components';
import { device } from 'Device';
import { IoSearchSharp } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

export const ItemsFilter = styled.div`
  display: ${props => (props.primary ? 'flex' : 'none')};
  flex-direction: column;
  position: relative;
  justify-content: center;
  @media ${device.tabletOnly} {
    margin-left: 15px;
  }
  @media ${device.desktop} {
    display: ${props => (props.primary ? 'none' : 'flex')};
    min-width: ${props => (props.primary ? '' : '250px')};
    /* max-width: ${props => (props.primary ? '' : '300px')}; */
  }
`;
export const ItemFilterInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #749574;
`;

export const SearchIcon = styled(IoSearchSharp)`
  fill: ${props => props.theme.colors.inputIcon};
  width: 20px;
  height: 20px;
  position: absolute;
  top: auto;
  left: 2px;
  cursor: pointer;
`;

export const DeleteInput = styled(IoClose)`
  fill: ${props => props.theme.colors.inputIcon};
  width: 20px;
  height: 20px;
  position: absolute;
  top: auto;
  right: 2px;
  cursor: pointer;
`;