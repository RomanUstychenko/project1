// import { useState } from "react";
// import { nanoid } from "nanoid";
import { FormWrapper, FormImgWrapper, Img, ListDetails } from "./LiveModalItemDetail.styled";
// import {
//   useSelector, 
//   // useDispatch 
// } from 'react-redux';

 
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // import { Formik } from 'formik';
// import { useLocation,
//   //  useSearchParams
//    } from 'react-router-dom';
import noimg from 'img/noimg.jpg'

// import { getSections } from "redux/sections/sections-selector"
// import { useEffect } from "react";

export default function LiveModalItemDetail ({
  //  itemsCategory, 
  itemName,
   price, 
   description, 
  //  _id,
   itemImg,
   section,


}) {

  // const sections = useSelector(getSections);
 
  // const itemImgID = nanoid();
  // const itemNameID = nanoid();
  // const itemPriceID = nanoid();
  // const itemDescriptionID = nanoid();
  // const itemSectionID = nanoid();
 
console.log(section)

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
          
            <ListDetails><span>{itemName}</span></ListDetails> 
            <ListDetails>price <span>{price}</span></ListDetails> 
            <ListDetails><span>{description}</span></ListDetails> 
            {/* <ListDetails>section <span>{section}</span></ListDetails> */}
        
    
       
        </FormWrapper>
        
        );

        

};
