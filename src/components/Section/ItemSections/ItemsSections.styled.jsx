import styled from 'styled-components';
import { device } from 'Device';
import { CiEdit } from 'react-icons/ci';
import {
  MdOutlineKeyboardDoubleArrowUp,
  MdOutlineKeyboardDoubleArrowDown,
} from 'react-icons/md';

export const FilterList = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 5px;
  min-height: 48px;
  margin-bottom: 10px;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.focusActive};
    cursor: pointer;
  }
`;

export const Button = styled.a`
  text-align: left;
  word-wrap: break-word;
  padding-left: 5px;
  margin-top: auto;
  margin-bottom: auto;
  box-sizing: border-box;
  border: none;
  width: 70%;
  color: #181515;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.35;
  letter-spacing: 0.04em;
  border-radius: 5px;

  @media ${device.tablet} {
    width: 100%;
    padding-left: 10px;
  }
`;

export const BtnChange = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-right: 2px;
  @media ${device.tablet} {
    margin-right: 5px;
  }
`;
export const StyledChange = styled(CiEdit)`
  width: 25px;
  height: 25px;

  color: red;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.btnChangeActive};
    cursor: pointer;
  }
`;
export const MoveButtonSection = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  width: 20px;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.btnActive};
    cursor: pointer;
  }
`;
export const MoveUpSection = styled(MdOutlineKeyboardDoubleArrowUp)`
  height: 20px;
  width: 20px;
`;
export const MoveDownSection = styled(MdOutlineKeyboardDoubleArrowDown)`
  height: 20px;
  width: 20px;
`;
export const FilterListWrap = styled.ul`
  li.active {
    color: #573131;
    background-color: ${props => props.theme.colors.sectionActive};
  }
`;
export const MoveButtonWrap = styled.div`
  padding-left: 5px;
  width: 20px;
  ${FilterList}:first-child & {
    display: flex;
  }
  ${FilterList}:last-child & {
    display: flex;
  }
`;
