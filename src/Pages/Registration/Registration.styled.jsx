import styled from 'styled-components';
import { device } from 'Device';
import { TextBtn } from 'components/Button/Button.styled';

export const RegForm = styled.form`
    margin-top: 70px;
    width:100%;
    @media ${device.tablet} {
        margin-top: 10px;
         }
         @media ${device.desktop} {
        margin-top: 100px;
         }
`

export const RegistrationPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


    

export const RegistrationFormList = styled.div`
    display: block;
    /* align-items: center; */
    &:not(:first-child) {
        margin-top: 30px;
    }
    @media ${device.tablet} {
        &:not(:first-child) {
        margin-top: 10px;
    }
         }
`
export const RegistrationFormWrapper = styled.div`
    
`
export const RegistrationFormLabel = styled.label`
display: block;
    color: white;
    @media ${device.mobile} {
        font-size: 20px;
    }
    @media ${device.tablet} {
        font-size: 18px;
    }
`

export const TextButton = styled(TextBtn)`
    
`