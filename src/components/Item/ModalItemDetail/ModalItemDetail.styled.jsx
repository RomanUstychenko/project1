import styled from 'styled-components';

export const Form = styled.form`
    font-size: 25px;
    border: 1px solid rgb(7, 94, 138);
    padding: 10px;
` 
export const FormInputList = styled.div`
    display: flex;
    flex-direction: column;
`
    

export const FormInput = styled.input`
    width: 300px;
`

export const FormBtn = styled.button`
    color: antiquewhite;
    min-width: 50px;
    min-height: 25px;
    border-radius: 10px;
    border: 1px solid rgb(7, 94, 138);
    background-color: rgb(38, 146, 179);
        &:hover {
            background-color: rgb(45, 102, 119);
        }
        &:focus {
            background-color: rgb(19, 58, 70);
}
`