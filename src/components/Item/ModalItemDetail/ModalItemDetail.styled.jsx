import styled from 'styled-components';
// import { Button } from "components/Button/Button";
import {BiDownArrow} from 'react-icons/bi';

export const FormWrapper = styled.div`
z-index: 1;
background-color: #919191;
    border: 1px solid rgb(7, 94, 138);
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
export const ButtonDel = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: 0px;
    height: 25px;
    width: 25px;
    font-size: 15px;
    color: #010101;
    background-color: red;
    border: none;
    border-radius: 50%;
    &:hover ,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
`


export const ButtonWrapper = styled.div`
    display: flex;
`
export const FormInputSection = styled.input`
margin-left: 6px;
    padding-left: 10px;
    width: 180px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #749574;
`

export const FormInputListSection = styled.div`
    display: flex;
    position: relative;
    /* flex-direction: column; */
    flex-wrap: wrap;
    align-content: space-between;
    margin-top: 25px;
    
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
export const ImgA = styled(Img)`


`

export const FormImgWrapper = styled.div`
/* position: relative; */
    display: block;
    /* justify-content: space-between; */
    /* &:hover .my__unique__button__class-asdf123  {
        height: 290px;
            border-radius:50px;
            background-color: #fff;
  } */
     
 
`

export const FormImgAction = styled.form`

`
export const FormImgActionList = styled.div`
/* display: none; */
margin-top: 10px;
position: relative;


`
export const FormInputListImg = styled.div`
/* display: none; */
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    align-content: space-between;
    ${FormImgWrapper}:hover &, :focus & {
    /* display: flex; */
}
    
`
export const FormInputLabelImg = styled.label`
/* position: absolute; */
bottom: 0px;
left: 0px;
border: none;
border-radius: 5px;
/* margin-left: 10px; */
/* margin-top: 10px; */
padding: 3px 5px;
background-color: ${props => props.theme.colors.btn};
font-size: 20px;
overflow: hidden;

    

     &:hover ,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }

`




export const ListSectionChange = styled.ul`
z-index: 1000;
position: absolute;
bottom: -30px;
right: 12px;
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
/* z-index: 1000; */
display: flex;
    position: absolute;
    top: 0;
    right: 0;
    height: 29px;
    align-items: center;
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

export const HideAction = styled.div`
display: none;
${FormImgWrapper}:hover &, :focus & {
    display: flex;
}
`