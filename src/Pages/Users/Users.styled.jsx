import styled from 'styled-components';
import { NavLink } from "react-router-dom"


export const GoBackWrap = styled.div`
margin-top: 10px;
    display: flex;
    justify-content: end;
`
export const GoBack = styled(NavLink) `
/* position: relative;
    top: 0px;
    right: 0x; */
    font-size: 18px;
`
export const ImgWraper = styled.div`
    
`
export const Img = styled.img`
width: 150px;
    height: 150px;
`
export const FormLogo = styled.form`
    
`
export const DataForm = styled.form`
  
`
export const DataWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`
export const DataLabel = styled.label`
  width: 90px;
`
export const DataInput = styled.input`
  height: 25px;
  width: 180px;
`
export const DataInputDescription = styled.textarea`
  height: 75px;
  width: 180px;
  font-family: inherit;
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
    /* font-weight: 800; */
    width: 200px;
    height: 30px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
`
