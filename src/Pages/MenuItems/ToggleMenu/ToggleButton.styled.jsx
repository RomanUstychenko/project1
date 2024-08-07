import styled from 'styled-components';
import { TbArrowsLeft } from "react-icons/tb";
import { TbArrowsRight } from "react-icons/tb";

export const MenuButton = styled.button`
position: absolute;
top: 0px;
right: 0px;
 /* z-index: 1000; */
  display: block;
  height: 30px;
  outline: 0;
  border: 0;
  margin-top: 15px;
  padding: 0px 5px;
  background: none;


  &:hover,
  :focus{
    cursor: pointer;
    color: ${props => props.theme.colors.btnActive};
  }
`;


export const BarOpen  = styled(TbArrowsRight)`
  width: 30px;
  height: 30px;
`
export const BarClose  = styled(TbArrowsLeft)`
  width: 30px;
  height: 30px;
`