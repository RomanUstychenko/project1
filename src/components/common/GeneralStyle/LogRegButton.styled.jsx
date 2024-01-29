import styled from 'styled-components';
import { device } from 'Device';
import { Btn } from 'components/Button/Button.styled';



export const ButtonLogReg = styled(Btn)`
      @media ${device.mobile} {
        margin-top: 70px;
    width: 100%;
    height: 50px;
    }
    @media ${device.tablet} {
        margin-top: 30px;
        width: 300px;
}
@media ${device.desktop} {
        margin-top: 40px;
        width: 350px;
}
`