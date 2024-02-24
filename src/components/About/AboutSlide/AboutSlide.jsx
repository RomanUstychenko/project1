import { useState, useEffect } from 'react';
import {SliderContainer, Slide} from './AboutSlide.styled';

const AboutSlide = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current === images.length - 1 ? 0 : current + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <SliderContainer>
      <Slide 
      src={images[current]} 
      alt={`Slide ${current}`} 
      />
    </SliderContainer>
  );
};

export default AboutSlide;