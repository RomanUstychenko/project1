import styled from 'styled-components';
import { device } from 'Device';
import { TextBtn } from 'components/Button/Button.styled';

export const FormLogin = styled.form`
    margin-top: 50px;
    @media ${device.mobile} {
        width: 100%;
    }
    @media ${device.tablet} {
        margin-top: 10px;
}
@media ${device.desktop} {
        margin-top: 70px;
}
`

export const LoginFormWrapper = styled.div`
    /* display: block;
    align-items: center; */
`
export const LoginFormList = styled.div`
    display: block;
    /* align-items: center; */
   
    &:not(:first-child) {
        margin-top: 40px;
    }
    @media ${device.tablet} {
        &:not(:first-child) {
        margin-top: 20px;
    }
}
    @media ${device.desktop} {
        &:not(:first-child) {
        margin-top: 40px;
    }
}
`

export const LoginFormLabel = styled.label`
    color: white;
    display: block;
    /* font-weight: 600; */
    @media ${device.mobile} {
        /* margin-right: 5px; */
        font-size: 20px;
    /* width: 95px; */
    }
    @media ${device.tablet} {
        font-size: 18px;
    }
    @media ${device.desktop} {
        font-size: 25px;
    }

`

export const TextButton = styled(TextBtn)`
    
`