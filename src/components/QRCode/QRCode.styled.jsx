import styled from 'styled-components';
// import { device } from 'Device';
import { Btn, TextBtn } from 'components/Button/Button.styled';

export const Wrapper = styled.div`
    width: 400px;
    height: 400px;
    z-index: 1;
background-color: #919191;
    border: 1px solid rgb(7, 94, 138);
`
export const Title = styled.h1`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 22px;
`
export const QrName = styled.p`
    padding-top: 5px;
    padding-bottom: 10px;
`
export const QrWrap = styled.div`
    width: 300px;
    height: 300px;
    margin: auto;
    background-color: #fff;
`
export const Button = styled(Btn)`
    
`
export const Text = styled(TextBtn)`
    
`