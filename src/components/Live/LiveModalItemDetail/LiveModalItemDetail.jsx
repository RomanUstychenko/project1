import React, { useState, useRef, useEffect } from 'react';
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
  const handleScroll = () => {
    const element = contentRef.current;
    if (element) {
      const isAtBottom =
        element.scrollHeight - element.scrollTop === element.clientHeight;
      setIsScrollAtEnd(isAtBottom); // Якщо в кінці прокрутки
    }
  };

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
