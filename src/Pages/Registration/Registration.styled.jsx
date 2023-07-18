import styled from 'styled-components';

export const Title = styled.h1`
    color: white;
    font-size: 25px;
    margin-top: 25px;
    margin-bottom: 25px;
`
export const RegistrationPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RegistrationFormLabelList = styled.div`
    width: 90px;
    font-weight: 600;
   
`
    

export const RegistrationForm = styled.div`
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`
export const RegistrationFormWrapper = styled.div`
    margin-bottom: 25px;
`
export const RegistrationFormLabel = styled.label`
    color: white;
`
export const RegistrationFormInput = styled.input`
    padding-left: 10px;
    width: 200px;
    height: 35px;
 border-radius: 5px;
 border: 1px solid #749574;
`