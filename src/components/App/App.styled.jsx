import styled from 'styled-components';
import { device } from 'Device';


export const Wrapper = styled.div`
position: relative;
margin: auto;
text-align: center;


    /* width: 240px; */
    /* margin-left: auto;
    margin-right: auto; */
    /* display: block;
    align-items: center;
    justify-content: center; */
    @media ${device.mobile} {
        width: 360px;
    }
    @media ${device.tablet} {
        width: 768px;
    }
    @media ${device.desktop} {
        width: 1280px;
    }
`