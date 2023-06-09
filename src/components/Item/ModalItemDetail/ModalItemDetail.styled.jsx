import styled from 'styled-components';
import { Button } from "components/Button/Button";
import {BiDownArrow} from 'react-icons/bi';

export const FormWrapper = styled.div`
    border: 1px solid rgb(7, 94, 138);
`
export const FormImgWrapper = styled.div`
    display: flex;
    justify-content: space-between;
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
export const ButtonDel = styled(Button)`
    
`
export const FormInputSection = styled.input`
margin-left: 6px;
    padding-left: 10px;
    width: 180px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #749574;
`
export const FormInputListImg = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    
`
export const FormInputListSection = styled.div`
    display: flex;
    position: relative;
    /* flex-direction: column; */
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 25px;
    
`
export const FormInputLabelImg = styled.label`
border: none;
border-radius: 5px;
margin-left: 10px;
margin-top: 10px;
padding: 3px 5px;
background-color: ${props => props.theme.colors.btn};
    font-size: 20px;
     &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
`

export const Saved = styled.p`
font-size: 20px;
    color: green;
    text-shadow: 1px 1px 2px green, 0 0 1em blue, 0 0 0.2em blue;
`
export const Deleted = styled.p`
    font-size: 20px;
    color: red;
    text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
`
export const Img = styled.img`
border-radius: 5px;
width: 150px;
height: 150px;
    
`
export const ListSectionChange = styled.ul`
position: absolute;
top: 0 px;
    right: 0px;
display: flex;
flex-direction: column;
border: 1px solid #749574;
width: 85px;
max-height: 100px;
overflow-y: scroll;
background-color: white;
    
`
export const LabelSection = styled.label`
    font-size: 15px;
    &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        background-color: #c0bcbc;
        cursor: pointer;
       }
`

export const BtnChageSection = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    height: 29px;
`
export const BtnArrow = styled(BiDownArrow)`
    /* color: red; */
    /* width: 100px;
    height:100px; */
    &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        /* background-color: #c0bcbc; */
        cursor: pointer;
       }
`