import styled from 'styled-components';
import { device } from 'Device';

export const LoginPage = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    margin-top: 60px;
  }
  @media ${device.desktop} {
    margin-top: 100px;
  }
`;
export const Title = styled.h1`
  color: black;
  font-size: 30px;

  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 60px;
  }
`;
export const Paragraph = styled.br`
  @media ${device.tablet} {
    display: none;
  }
`;
