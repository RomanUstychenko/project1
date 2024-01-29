import styled from 'styled-components';
import { device } from 'Device';


export const Wrapper = styled.div`
position: relative;
margin: auto;
text-align: center;


    @media ${device.mobile} {
        width: 360px;
    }
    @media ${device.tablet} {
        width: 768px;
    }
    @media ${device.desktop} {
        width: 100%;
        /* margin-left: 10px;
        margin-right: 10px; */
    }
`