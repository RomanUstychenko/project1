import styled, { css } from 'styled-components';
import { device } from 'Device';
import {MdDeleteForever} from 'react-icons/md';
import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown  } from "react-icons/md";

export const nameWidth = [
  "150px", //// mobile//////        [0]
  "270px", //// mobile slide//////  [1]
  "100%",  //// tablet+desktop//// [2]
  "100%",  //// tablet slide/////   [3]
  "100%",  //// desktop(only name)//[4]
]
export const priceWidth = [
  "105px", //// tablet//////
 "200px"   //// desktop//////
];

export const sectionWidth = [
  "165px", //// tablet//////
 "450px"  //// desktop//////
];


// const nameStyle = namesItem.filter(data => data.title === "Name").map(data  => (data.width));




// const priceStyle = namesItem.filter(data => data.title === "Price").map(data  => (data.width));



// const sectionStyle = namesItem.filter(data => data.title === "Section").map(data  => (data.width));

const deleteStyle = [
    "25px", /////mobile/////
    "25px" //// tablet//////
];


export const ItemsList = styled.li`
/* background-color: #d2d2d8; */
/* border-radius: 10px; */
/* box-shadow: 7px 20px 14px rgba(10, 4, 1, 0.1); */
border-bottom: 1px solid #ccc;
width:  100%;
min-height: 50px;
    display: flex;
    cursor: pointer;
    &:not(:last-child) {
    margin-bottom: 10px;
    
    

}
        &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.focusActive};   
  }
@media ${device.tablet} {
  min-height: 50px;
    align-items: center;
    };
`

export const ItemWrap = styled.div`
  width: 100%;
`
export const Item = styled.button`
cursor: pointer;
border: none;
padding: 0px 5px;
background-color: transparent;
align-items: center;
width: 100%;
    @media ${device.tablet} {
        width: 100%;
        font-size: 20px;
        display: flex;
        /* padding: 0px; */
    };
`

/* width: calc(100vw - 235px); */
export const ItemTextWrap = styled.div`
 
    
    @media ${device.tablet} {
      flex-grow: 1;
      flex-shrink: 1;
    width: 0px;
      font-size: 18px;
        text-align: left;
    }
`
export const ItemText = styled.p`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 20px;
    @media ${device.mobileOnly} {
      width: calc(100vw - 235px);  

${props =>
props.value &&
css`
  width: calc(100vw - 105px);
`};
    }
    
    @media ${device.tablet} {
      font-size: 18px;
    };

`
export const ItemDescription = styled.p`
  display: none;
  @media ${device.tablet} {
    display: flex;
    text-align: left;
    padding: 0px 5px;
      font-size: 14px;
      font-style: italic;
    };
`
export const ItemPriceWrap = styled.span`
display: flex;
@media ${device.tablet} 
 {font-size: 14px;
  justify-content: center;
  width: ${priceWidth[0]}
};

 @media ${device.desktop} 
 {
  font-size: 16px;
  width: ${priceWidth[1]}
};

`
export const ItemPriceName = styled.b`

@media ${device.tablet} {
    display: none;
    };
`
export const ItemPrice = styled.p`
flex-shrink: 0;

`
export const ItemSizeWrap = styled.span`
display: flex;
`
export const ItemWeight = styled.p`
@media ${device.tablet} {
    /* font-size: 16px; */
    };
`



export const ItemSectionWrap = styled.span`
display: none;
@media ${device.tablet} {
    display: flex;
    /* border: 1px solid rgb(7, 94, 138); */
    };
`
export const ItemSection = styled.p`

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    
@media ${device.tablet} {
  font-size: 16px;
    width:calc(${sectionWidth[0]} - ${deleteStyle[1]} - 5px) ;
    };
    @media ${device.desktop} {
    width:calc(${sectionWidth[1]} - ${deleteStyle[1]} - 5px) ;
    };
`


    
export const DelItem  = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`
export const DelIcon = styled(MdDeleteForever)`
    width: ${deleteStyle[0]};
    height: ${deleteStyle[0]};
    color: red;
    &:hover,
       &:focus {
        color: #911717;   
  }
    @media ${device.tablet} {
        width: ${deleteStyle[1]};
        height: ${deleteStyle[1]};
    }
`
export const ButtonWrap = styled.div`
    
    width: 20px;
    ${ItemsList}:nth-child(2) & {
      display: flex;
    };
    ${ItemsList}:last-child & {
      display: flex;
    };
`
export const MoveButtonSection = styled.button`
  border: none;
  background-color: inherit;
  width: 20px;
  padding: 0;
  &:hover,
       &:focus {
        color: ${props => props.theme.colors.btnActive};
        cursor: pointer;
  }
`
export const MoveUpSection = styled(MdOutlineKeyboardDoubleArrowUp)`
      height: 20px;
    width: 20px;


`
export const MoveDownSection = styled(MdOutlineKeyboardDoubleArrowDown)`
    height: 20px;
    width: 20px;

`