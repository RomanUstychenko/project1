import styled from 'styled-components';

export const LoginFormLabelList = styled.div`
    width: 90px;
    font-weight: 600;
`
export const LoginFormWrapper = styled.div`
    margin-bottom: 25px;
`
export const LoginFormList = styled.div`
    display: flex;
    align-items: center;
   
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`
    
export const LoginFormInput = styled.input`
    padding-left: 10px;
    width: 200px;
    height: 35px;
 border-radius: 5px;
 border: 1px solid #749574;
`
export const LoginFormLabel = styled.label`
    color: white;

`