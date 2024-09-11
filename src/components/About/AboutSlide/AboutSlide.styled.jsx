import styled from 'styled-components';
import { device } from 'Device';

export const SliderContainer = styled.div`
  overflow: hidden;
  margin-top: 15px;
  @media ${device.desktop} {
    width: 30%;
  }
`;

export const Slide = styled.img`
  height: 400px;
  object-fit: cover;
  transition: transform 0.5s ease;
  @media ${device.desktop} {
    height: 550px;
  }
`;
