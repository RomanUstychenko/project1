import styled from 'styled-components';
import { device } from 'Device';

export const Aboutwrapper = styled.div`
    margin-top: 55px;
    padding: 0 15px;
    @media ${device.desktop} {
        margin-top: 100px;
        display: flex;
         }

`
export const AboutText = styled.p`
font-size: 20px;
line-height: 2;
@media ${device.desktop} {
    font-size: 45px;
    width: 70%;
         };

`
