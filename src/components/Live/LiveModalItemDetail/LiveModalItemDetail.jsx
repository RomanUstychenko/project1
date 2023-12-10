// import { useState } from "react";
// import { nanoid } from "nanoid";
import { FormWrapper, FormImgWrapper, Img, ListDetails, ItemName, Description, Price } from "./LiveModalItemDetail.styled";

import noimg from 'img/noimg.jpg'


export default function LiveModalItemDetail ({
   itemName,
   price, 
   description, 
  //  _id,
   itemImg
}) {

 
  // const itemImgID = nanoid();
  // const itemNameID = nanoid();
  // const itemPriceID = nanoid();
  // const itemDescriptionID = nanoid();
  // const itemSectionID = nanoid();
 


      return ( 
        <FormWrapper
        
        onClick={e => e.stopPropagation()}
        >
          <FormImgWrapper>
              <Img
            src={itemImg || noimg} 
            alt="img" 
            loading='lazy'/>
         
          </FormImgWrapper>
          <ListDetails>
            <ItemName>{itemName}</ItemName>
            <Description>{description}</Description>
            <Price>Price: {price}</Price> 
            </ListDetails>
    
       
        </FormWrapper>
        
        );

        

};
