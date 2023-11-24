import styled from 'styled-components';
// import { Button } from "components/Button/Button";
import {BiDownArrow} from 'react-icons/bi';
import { GrEdit } from "react-icons/gr";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const ChangeImage = styled(GrEdit)`
    
`
export const AddImage = styled(MdOutlineAddAPhoto)`
    
`
export const DeleteImage = styled(MdDeleteForever)`
    
`

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
export const FormInputListImg = styled.div`
    position: absolute;
    top: 0;
    right: 50%;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    /* align-content: space-between; */
    
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
position: relative;
    display: block;
    /* justify-content: space-between; */
    /* &:hover .my__unique__button__class-asdf123  {
        height: 290px;
            border-radius:50px;
            background-color: #fff;
  } */
     
 
`

export const FormInputLabelImg = styled.label`
display: none;
border: none;
border-radius: 5px;
margin-left: 10px;
margin-top: 10px;
padding: 3px 5px;
background-color: ${props => props.theme.colors.btn};
    font-size: 20px;

    ${FormImgWrapper}:hover &, :focus & {
        display: block;
    /* height: 290px; */
        /* border-radius:50px; */
        /* background-color: #fff; */
}

     &:hover ,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }

`

export const ButtonDel = styled.button`
margin-top: 10px;
padding: 3px 5px;
  background-color: ${props => props.theme.colors.btn};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    
    height: 25px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      /* &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  } */



display: none;
position: relative;
right: 0px;
height: 25px;
padding: 0px 0px;
padding-left: 5px;
font-size: 15;
color: #010101;
background-color: red;

${FormImgWrapper}:hover &, :focus & {
        display: block;
    /* height: 290px; */
        /* border-radius:50px; */
        /* background-color: #fff; */
}
&:hover ,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};
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