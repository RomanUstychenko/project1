import styled from 'styled-components';
import { device } from 'Device';


export const LoaderWrapper = styled.span`
display: flex;
align-items: center;
justify-content: center;


width: 100vh;
height: 100vh;

@media ${device.mobile} {
        width: 360px;
    }
    @media ${device.tablet} {
        width: 768px;
    }
    @media ${device.desktop} {
        width: 1280px;
    }

    /* position: absolute;
    top: 50%;
    left: 50%; */
    /* margin-Right: -50%; */
    /* transform: translate(-50%, -50%); */
` 