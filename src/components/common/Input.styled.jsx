import styled from 'styled-components';

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
font-size: 15px;
margin-top: 10px;
    padding-left: 10px;
    max-width: 100%;
    height: 25px;
    border-radius: 5px;
    border: 1px solid #749574;
`
export const LabelName = styled.p`
    font-size: 20px;
    font-family: Inter, sans-serif;
`