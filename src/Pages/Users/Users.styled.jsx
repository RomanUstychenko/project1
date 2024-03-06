import styled from 'styled-components';
import { NavLink } from "react-router-dom"
import { device } from 'Device';
import {Btn, TextBtn } from 'components/Button/Button.styled';

export const Buttons = styled(Btn)`
  margin-top: 30px;
  height: 30px;
  width: 100%;
  @media ${device.tablet} {
    width: 400px;
    height: 40px;
    };
`
export const TextButton = styled(TextBtn)`
  font-size: 16px;
  @media ${device.tablet} {
    font-size: 20px;
    };
`
export const GoBackWrap = styled.div`
margin-top: 10px;
    display: flex;
    justify-content: end;
`
export const GoBack = styled(NavLink) `
margin-right: 10px;
/* position: relative;
    top: 0px;
    right: 0x; */
    font-size: 18px;
`
export const ImgWraper = styled.div`
 @media ${device.tablet} {
  display: flex;
    justify-content: center;
    align-items: center;
    };
`
export const Welcome = styled.p`
@media ${device.mobileOnly} {
  margin-bottom: 10px;
    };
  
  @media ${device.tablet} {
    margin-right: 20px
    };
  ;
`
export const Img = styled.img`
    width: 150px;
    height: 150px;
    @media ${device.tablet} {
      width: 170px;
    height: 170px;
    };
`
export const FormLogo = styled.form`
    
`
export const DataForm = styled.form`
  margin-top: 30px;
`
export const DataWrapper = styled.div`
  display: flex;
  &:not(:first-child) {
    margin-top: 10px
  };
  
  justify-content: center;
`
export const DataLabel = styled.label`
  width: 90px;
  font-size: 16px;
  &:not(:last-child) {
    margin-top: auto;
  margin-bottom: auto;
  }
  @media ${device.tablet} {
    font-size: 18px;
    };
`
export const DataInput = styled.input`
border-radius: 5px;
border: 0px;
padding: 5px;
  width: 180px;
  height: 25px;
  /* &:focus, &:hover  {
    outline: 2px solid #F59256;
 } */
  @media ${device.tablet} {
    width: 310px;
    height: 35px;
    font-size: 18px;
    };
`
export const DataInputDescription = styled.textarea`
border-radius: 5px;
border: 0px;
padding: 5px;
width: 180px;
height: 75px;
font-family: inherit;
/* &:focus, &:hover  {
    outline: 2px solid #F59256;
 } */
@media ${device.tablet} {
    width: 310px;
    height: 75px;
    font-size: 18px;
    };
`
export const FormInputHidden = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    line-height: 0;
    overflow: hidden;
    padding: 0;
    margin: 0;
`
export const LabelLogo = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  padding: 0px 5px;
  background-color: ${props => props.theme.colors.btn};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-weight: 800;
    width: 100%;
    height: 30px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
  @media ${device.tablet} {
    width: 400px;
    height: 40px;
    };
`
