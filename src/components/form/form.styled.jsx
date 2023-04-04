import styled from 'styled-components';

import { ReactComponent as GoIt } from '../../img/logo.svg';

export const Forms = styled.div`
  position: absolute;
  width: 380px;
  height: 460px;
  left: 435px;
  top: 168px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const Logo = styled(GoIt)`
  position: absolute;
  width: 76px;
  height: 22px;
  padding-left: 20px;
  padding-top: 20px;
`;
export const PictureBox = styled.div`
  padding: 28px 36px 0px 36px;
`;
export const Picture = styled.img`
  width: 308px;
  height: 168px;
`;

export const CenterLine = styled.img`
  margin-top: 18px;
`;
export const PictureBoyBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;
  border: 0px solid;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #42af87;
  }
`;
export const BtnFollowing = styled(Btn)`
  background-color: #5cd3a8;
`;
export const BtnText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  color: #373737;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Tweets = styled.p`
  text-align: center;
  margin-top: 62px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const TweetsFollowing = styled(Tweets)`
  margin-top: 16px;
  margin-bottom: 26px;
`;
