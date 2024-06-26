import styled from 'styled-components';
// import { Button } from "components/Button/Button";
import {BiDownArrow} from 'react-icons/bi';
import { GrEdit } from "react-icons/gr";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Btn, TextBtn } from 'components/Button/Button.styled';

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

export const FormImgAction = styled.form`
    display: flex;
    /* width: 100%; */
    position: absolute;
    top: 0%;
    right: 50%;
    transform: translate(+50%, 0%);
    flex-wrap: wrap;
    align-content: space-between;
`
export const FormInputListImg = styled.div`
    
    display: flex;
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
export const InputListWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    margin-left: 6px;
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
margin-top: 5px;
position: relative;
    display: block;
`

export const FormInputLabelImg = styled.label`

display: none;
border: none;
border-radius: 5px;
margin-top: 10px;
padding: 3px ;
background-color: ${props => props.theme.colors.btn};
box-sizing: border-box;
font-size: 20px;
height: 30px;
width: 30px;
text-decoration: none;
font-family: inherit;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${FormImgWrapper}:hover &, :focus & {
        display: inline;
}

     &:hover ,
       &:focus {
        background-color: green;
        cursor: pointer;
  }

`

export const ButtonDel = styled.button`
display: none;
border: none;
border-radius: 5px;
margin-top: 10px;
margin-left: 25px;
padding: 3px ;
background-color: red;
font-size: 20px;
height: 30px;
width: 30px;
text-decoration: none;
font-family: inherit;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);



${FormImgWrapper}:hover &, :focus & {
        display: inline;
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
width: 200px;
max-height: 100px;
overflow-y: scroll;
background-color: white;
    
`
export const LabelSection = styled.label`
    font-size: 18px;
    &:not(:last-child) {
    margin-bottom: 5px;
};
    &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        background-color: #c0bcbc;
        cursor: pointer;
       }
`

export const BtnChageSection = styled.button`
display: flex;
    position: absolute;
    top: 0;
    right: 0;
    height: 30px;
    align-items: center;
`

export const BtnArrow = styled(BiDownArrow)`
     &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        /* background-color: #c0bcbc; */
        cursor: pointer;
       }
`
export const RenameButton = styled(Btn)`
    
`
export const RenameButtonText = styled(TextBtn)`
    
`