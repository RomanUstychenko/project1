import styled from 'styled-components';
import { device } from 'Device';

export const NotFoundWrap = styled.div`
  padding: 0px 10px;
  margin-top: 100px;
  @media ${device.desktop} {
    margin-top: 200px;
  }
`;
export const NotFondText = styled.p`
  font-size: 40px;
  @media ${device.desktop} {
    font-size: 60px;
  }
`;
