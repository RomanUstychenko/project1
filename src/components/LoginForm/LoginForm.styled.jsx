import styled from 'styled-components';
import { device } from 'Device';
import { TextBtn } from 'components/Button/Button.styled';

export const FormLogin = styled.form`
  margin-top: 50px;
  @media ${device.mobile} {
    width: 100%;
  }
  @media ${device.tablet} {
    margin-top: 10px;
  }
  @media ${device.desktop} {
    margin-top: 70px;
  }
`;

export const LoginFormWrapper = styled.div``;
export const LoginFormList = styled.div`
  display: block;

  &:not(:first-child) {
    margin-top: 40px;
  }
  @media ${device.tablet} {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
  @media ${device.desktop} {
    &:not(:first-child) {
      margin-top: 40px;
    }
  }
`;

export const LoginFormLabel = styled.label`
  color: white;
  display: block;
  @media ${device.mobile} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.desktop} {
    font-size: 25px;
  }
`;

export const TextButton = styled(TextBtn)``;
