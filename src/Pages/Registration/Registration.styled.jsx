import styled from 'styled-components';
import { device } from 'Device';
import { TextBtn } from 'components/Button/Button.styled';

export const RegForm = styled.form`
  width: 100%;
`;

export const RegistrationPage = styled.div`
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

export const RegistrationFormList = styled.div`
  display: block;
  &:not(:first-child) {
    margin-top: 30px;
  }
  @media ${device.tablet} {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
  @media ${device.desktop} {
    &:not(:first-child) {
      margin-top: 40px;
    }
  }
`;
export const RegistrationFormWrapper = styled.div``;
export const RegistrationFormLabel = styled.label`
  display: block;
  color: black;
  font-weight: bold;
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
