import React from 'react';
import {
  Forms,
  Logo,
  Btn,
  BtnFollowing,
  BtnText,
  Tweets,
  TweetsFollowing,
  PictureBox,
  Picture,
  CenterLine,
  PictureBoyBox,
} from './form.styled';
import picture from '../../img/picture.png';
import Line from '../../img/line.png';
import boy from '../../img/boy.png';
import { useState, useEffect } from 'react';

const Form = () => {
  const [BtnActive, setBtnActive] = useState(() => {
    try {
      const Btn = localStorage.getItem('BtnActive') || false;
      return Btn === null ? undefined : JSON.parse(Btn);
    } catch (error) {
      console.log(error);
    }
  });
  const [Following, setFollowing] = useState(() => {
    let Foll = localStorage.getItem('Following') || 10500;
    return Foll === null ? undefined : JSON.parse(Foll);
  });

  useEffect(() => {
    localStorage.setItem('BtnActive', JSON.stringify(BtnActive));
    localStorage.setItem('Following', JSON.stringify(Following));
  }, [BtnActive, Following]);

  const following = () => {
    if (!BtnActive) {
      setBtnActive(true);
      setFollowing(prev => prev + 1);
    } else {
      setBtnActive(false);
      setFollowing(prev => prev - 1);
    }
  };

  return (
    <Forms>
      <Logo />
      <PictureBox>
        <Picture src={picture} alt="fff" />
      </PictureBox>

      <PictureBoyBox>
        <img src={boy} alt="fff" />
      </PictureBoyBox>
      <CenterLine src={Line} alt="fff" />
      <Tweets>777 TWEETS</Tweets>

      <TweetsFollowing>
        {new Intl.NumberFormat('en-US').format(Following)} FOLLOWERS
      </TweetsFollowing>

      {!BtnActive && (
        <Btn
          type="button"
          onClick={() => {
            following();
          }}
        >
          <BtnText>FOLLOW</BtnText>
        </Btn>
      )}
      {BtnActive && (
        <BtnFollowing
          type="button"
          onClick={() => {
            following();
          }}
        >
          <BtnText>FOLLOWING</BtnText>
        </BtnFollowing>
      )}
    </Forms>
  );
};
export default Form;