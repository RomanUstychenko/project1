import styled from 'styled-components';
import { device } from 'Device';

export const FormWrapper = styled.div`
/* z-index: 1; */
display: flex;
flex-direction: column;
/* padding-left: 5px;
padding-right: 5px; */
padding: 0px 5px 5px 5px;
min-width: 320px;
max-width: 370px;
height: 600px;
background-color: black;
    border: 1px solid rgb(7, 94, 138);
    @media ${device.tablet} {
        min-width: 500px;
        height: 400px;
    }; 
    @media ${device.desktop} {
      
    }; 
`
export const FormImgWrapper = styled.div`
margin-top: 15px;
position: relative;
    display: block;
    @media ${device.tablet} {
        margin-top: 5px;
    };
`

export const Img = styled.img`
border-radius: 5px;
width: 300px;
height: 300px;
@media ${device.tablet} {
    width: 220px;
    height: 220px;
    };
`

export const ListDetails = styled.ul`
/* height: 250px; */
display: flex;
flex-direction: column;
flex-grow: 1;
`
export const ItemNameWrap = styled.li`

`

export const ItemName = styled.p`
color: grey;
    font-size: 20px;
`
export const DescriptionWrap = styled.li`
    position: relative;
    overflow: hidden; 
`
export const Description = styled.p`
max-height: 180px;
overflow-y: auto;
margin-bottom: auto;
margin-top: auto;
color: #ffffff;
text-overflow: ellipsis;
@media ${device.tablet} {
    max-height: 120px;
    };
  /* Градієнт з'являється тільки, якщо тексту забагато */
  ${({ $isOverflow, $isScrollAtEnd }) =>
    $isOverflow && !$isScrollAtEnd &&
    `
    &:after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 30px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      pointer-events: none; /* Щоб градієнт не блокував прокрутку */
    }
  `}
`
export const PriceWeightWrap = styled.li`
display: flex;
    margin-top: auto;
    font-size: 20px;
    color: #883030;
`
export const Price = styled.p`

`
export const Weight = styled.p`

`