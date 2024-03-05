import styled, { css } from 'styled-components';
import { device } from 'Device';
import {MdDeleteForever} from 'react-icons/md';


export const nameWidth = [
  "150px", //// mobile//////
  "200px",    //// tablet//////
  "100%",    //// desktop//////
]
export const priceWidth = [
  "50px", //// tablet//////
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
    display: flex;
    cursor: pointer;
    &:not(:last-child) {
    margin-bottom: 10px;
}
        &:hover,
       &:focus {
        background-color: ${props => props.theme.colors.btnActive};   
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
    props.close &&
    css`
      width: 270px;
    `}
    @media ${device.tablet} {
        
        width: ${nameWidth[1]};
        padding-left: 10px;
        text-align: left;

        ${props =>
    props.close &&
    css`
      width: 470px;
    `}

    };
    @media ${device.desktop} {
        width: ${nameWidth[2]};
        ${props =>
    props.close &&
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
 {width: ${priceWidth[0]}}
 @media ${device.desktop} 
 {width: ${priceWidth[1]}}
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