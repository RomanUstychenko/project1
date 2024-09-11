import styled from 'styled-components';
import { Btn, TextBtn } from 'components/Button/Button.styled';

export const VerifyWrap = styled.div`
    margin-top: 100px;
    padding: 0 10px;
`
export const Title = styled.h1`
    color: black;
    font-size: 40px;
`

export const VerifyButton = styled(Btn)`
margin-top: 30px;
padding: 10px;
height: 50px;
`
export const VerifyTextButton = styled(TextBtn)`
    font-size: 25px;
`
export const ShowMessageWrap = styled.div`
    margin-top: 50px;
`
export const ShowMessage = styled.p`
    font-style: italic;
    font-size: 25px;
    text-shadow: 1px 1px 2px #a56d05, 0 0 1em #101010;
`