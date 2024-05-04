import styled, { css } from 'styled-components';
import { device } from 'Device';
import {MdDeleteForever} from 'react-icons/md';
import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown  } from "react-icons/md";

export const nameWidth = [
  "150px", //// mobile//////        [0]
  "270px", //// mobile slide//////  [1]
  "100%",    //// tablet//////     [2]
  "100%",    //// tablet slide///// [3]
  "100%",    //// desktop//////     [4]
]
export const priceWidth = [
  "65px", //// tablet//////
 "250px"   //// desktop//////
];

export const sectionWidth = [
  "160px", //// tablet//////
 "500px"  //// desktop//////
];


// const nameStyle = namesItem.filter(data => data.title === "Name").map(data  => (data.width));




// const priceStyle = namesItem.filter(data => data.title === "Price").map(data  => (data.width));



// const sectionStyle = namesItem.filter(data => data.title === "Section").map(data  => (data.width));

const deleteStyle = [
    "20px", /////mobile/////
    "25px" //// tablet//////
];


export const ItemsList = styled.li`
background-color: #d2d2d8;
border-radius: 10px;
box-shadow: 7px 20px 14px rgba(10, 4, 1, 0.1);
width:  100%;
height: 50px;
    display: flex;
    cursor: pointer;
    &:not(:last-child) {
    margin-bottom: 10px;
}
        &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.stringActive};   
  }
@media ${device.tablet} {
    height: 35px;
    align-items: center;
    };
`
export const Item = styled.button`
cursor: pointer;
border: none;
background-color: transparent;
align-items: center;
    width: 100%;
    @media ${device.tablet} {
        width: 100%;
        font-size: 20px;
        display: flex;
        padding: 0px;
    };
`
export const ItemText = styled.p`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 20px;
    width: ${nameWidth[0]};
    
    ${props =>
    props.value &&
    css`
      width: ${nameWidth[1]};
    `};
    @media ${device.tablet} {
        
        width: ${nameWidth[2]};
        /* padding-left: 10px; */
        text-align: left;

        ${props =>
    props.value &&
    css`
      width: ${nameWidth[3]};
    `}

    };
    @media ${device.desktop} {
        width: ${nameWidth[2]};
        ${props =>
    props.value &&
    css`
      width: 100%;
    `}
    };
`
export const ItemPriceWrap = styled.span`
display: flex;
@media ${device.tablet} {
    /* border: 1px solid rgb(7, 94, 138); */
    };

`
export const ItemPriceName = styled.b`
@media ${device.tablet} {
    display: none;
    };
`
export const ItemPrice = styled.p`

 @media ${device.tablet} 
 {width: ${priceWidth[0]}};

 @media ${device.desktop} 
 {width: ${priceWidth[1]}};
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
    width:calc(${sectionWidth[0]} - ${deleteStyle[1]}) ;
    };
    @media ${device.desktop} {
    width:calc(${sectionWidth[1]} - ${deleteStyle[1]}) ;
    };
`


    
export const DelItem  = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`
export const DelIcon = styled(MdDeleteForever)`
    width: ${deleteStyle[0]};
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