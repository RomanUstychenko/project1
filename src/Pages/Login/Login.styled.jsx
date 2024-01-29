import styled from 'styled-components';
import { device } from 'Device';

export const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.h1`
    color: white;
    font-size: 30px;
    margin-top: 50px;
    
    @media ${device.tablet} {
        margin-top: 10px;
        font-size: 25px;
}
@media ${device.desktop} {
        margin-top: 40px;
        font-size: 40px;
}
`
export const Paragraph = styled.br`
       @media ${device.tablet} {
        display: none;
}
`