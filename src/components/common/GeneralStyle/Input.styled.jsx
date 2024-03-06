import styled from 'styled-components';
import { device } from 'Device';

export const LogRegInput = styled.input`
    box-sizing: border-box;
padding-left: 10px;
 border-radius: 5px;
 border: none;
 box-shadow: 7px 20px 14px rgba(10, 4, 1, 0.5);
 &:focus, &:hover  {
    
    outline: 2px solid #F59256;
 }
 @media ${device.mobile} {
    margin-top: 5px;
    width: 300px;
    height: 50px;
    }
    @media ${device.tablet} {
        height: 40px;
    }
    @media ${device.desktop} {
        margin-top: 10px;
        width: 350px;
        height: 50px;
}
`
export const Form = styled.form`
 font-size: 25px;
    border: 1px solid rgb(7, 94, 138);
    border-radius: 5px;
    padding: 30px 10px 10px 10px;
    width: 300px;
    background-color: #919191;
`
   
export const FormInputList = styled.div`
    display: flex;
    flex-direction: column;
    &:not(:first-child) {
    margin-top: 10px;
}
    
`
export const FormInputLabel = styled.label`
font-size: 25px;
font-family: inherit;


`
export const FormInput = styled.input`
font-family: 'Times New Roman', Times, serif;
font-size: 17px;
margin-top: 10px;
    padding-left: 10px;
    max-width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #749574;
    /* &:focus, &:hover  {
    outline: 2px solid #F59256;
 } */
`
export const FormInputDescription = styled.textarea`
font-family: 'Times New Roman', Times, serif;
font-size: 17px;
margin-top: 10px;
    padding-left: 10px;
    max-width: 100%;
    height: 100px;
    border-radius: 5px;
    border: 1px solid #749574;
    /* &:focus, &:hover  {
    outline: 2px solid #F59256;
 } */
`
export const FormInputSection = styled.input`
font-family: 'Times New Roman', Times, serif;
font-size: 17px;
    background-color: #FFF;
    padding-left: 10px;
    width: 170px;
    height: 30px;
    border-radius: 5px;
    border: 1px soloid #749574;
      &:focus, &:hover  {
    outline: none;
 }
`
export const LabelName = styled.p`
    font-size: 20px;
    font-family: Inter, sans-serif;
`