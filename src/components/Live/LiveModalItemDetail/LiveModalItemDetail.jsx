import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  FormWrapper,
  FormImgWrapper,
  Img,
  ListDetails,
  ItemNameWrap,
  ItemName,
  DescriptionWrap,
  Description,
  PriceWeightWrap,
  Price,
  Weight,
} from './LiveModalItemDetail.styled';
import formatNumber from 'components/hooks/formatNumber';
import noimg from 'img/noimg.jpg';

export default function LiveModalItemDetail({ item }) {
  const { itemName, price, weight, description, itemImg } = item;

  const contentRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

  // Перевірка, чи є переповнення (текст більше, ніж блок)
  useEffect(() => {
    const checkOverflow = () => {
      const element = contentRef.current;
      if (element) {
        setIsOverflow(element.scrollHeight > element.clientHeight);
      }
    };
    checkOverflow(); // Перевіряється при завантаженні компонента
    window.addEventListener('resize', checkOverflow); // Перевірка при зміні розміру вікна
    return () => {
      window.removeEventListener('resize', checkOverflow); // Очищення
    };
  }, []);

  // Відстеження позиції прокрутки

  const handleScroll = useCallback(() => {
    const element = contentRef.current;
    if (element) {
      console.log('handleScroll');
      setIsScrollAtEnd(
        element.scrollHeight -
          Math.ceil(element.scrollTop + element.clientHeight) <=
          1
      );
    }
  }, []);

  return (
    <FormWrapper onClick={e => e.stopPropagation()}>
      <FormImgWrapper>
        <Img src={itemImg || noimg} alt="img" loading="lazy" />
      </FormImgWrapper>
      <ListDetails>
        <ItemNameWrap>
          <ItemName>{itemName}</ItemName>
        </ItemNameWrap>
        <DescriptionWrap>
          <Description
            ref={contentRef}
            $isOverflow={isOverflow}
            $isScrollAtEnd={isScrollAtEnd}
            onScroll={handleScroll}
          >
            {description}
          </Description>
        </DescriptionWrap>

        <PriceWeightWrap>
          <Price>Price: {formatNumber(price)}</Price>
          {weight && <Weight>/{weight}</Weight>}
        </PriceWeightWrap>
      </ListDetails>
    </FormWrapper>
  );
}
