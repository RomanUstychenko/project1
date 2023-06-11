import styled from 'styled-components';

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
export const FormInputLabelImg = styled.label`
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
width: 150px;
height: 150px;
    
`