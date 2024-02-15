import styled from 'styled-components';
import { TbArrowsLeft } from "react-icons/tb";
import { TbArrowsRight } from "react-icons/tb";

export const MenuButton = styled.button`
position: absolute;
 z-index: 1000;
  display: block;
  transform-origin: 16px 11px;
  /* float: left; */
  /* margin-right: 29px; */
  outline: 0;
  border: 0;
  padding: 5px;
  background: none;

  span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  /* :focus {
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    outline: 0;
  } */

  &:hover,
  :focus{
    border: medium none rgb(111, 255, 176);
    box-shadow: rgb(111, 255, 176) 0 0 2px 2px;
    /* outline: 0; */
    /* span:nth-of-type(1) {
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
    }

    span:nth-of-type(3) {
      width: 30px;
    } */
  }

  &.active {

    /* span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 40px;
    } */
  }
`;

// export const Bar = styled.span`
//   display: block;
//   width: 40px;
//   height: 5px;
//   margin-bottom: 7px;
//   background-color: #6b0707;
// `;

export const BarOpen  = styled(TbArrowsRight)`
  
`
export const BarClose  = styled(TbArrowsLeft)`
  

`