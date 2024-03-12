import styled from 'styled-components';
// import { device } from 'Device';
import { Btn, TextBtn } from 'components/Button/Button.styled';

export const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    width: 400px;
    height: 450px;
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
/* display: flex; */
    width: 300px;
    height: 300px;
    /* margin: auto; */
    margin-bottom: 15px;
    background-color: #fff;
`
export const Button = styled(Btn)`
    
`
export const Text = styled(TextBtn)`
    
`