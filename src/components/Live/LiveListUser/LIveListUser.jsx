import React from 'react'
import { 
    // useSelector, 
    useDispatch } from 'react-redux';
// import { getItemsByCategory,
//   //  getItems
//    } from 'redux/items/items-selector';
// import { Modal } from "components/Modal/Modal";
// import scss from "./LiveListUser.module.scss"
// import { useState } from 'react';
// import { deleteItem, 
//   //  geItemsByCategory
//   } from "redux/items/items-operation"; 
import { useLocation,
  //  useSearchParams
   } from 'react-router-dom';
import { nanoid } from 'nanoid';
// import { fetchSections } from "redux/sections/sections-operation"
  //  import { useEffect } from "react";
  //  import LiveItemsSections from '../LiveItemsSections/LiveItemsSections';
  //  import {  allUsers } from "redux/user/user-operation";
  
  // import { itemUpdate, geItemsByCategory } from "redux/items/items-operation"; 
  // import { Notify } from 'notiflix/build/notiflix-notify-aio';
  // import {  getAllUser } from "redux/user/user-selector";
  import { NavLink } from 'react-router-dom';
 



export default  function LiveListUser({sections, user}) {
  const location = useLocation();
  // const category = location.pathname.split('/')[2];
  // const users = useSelector(getAllUser)
// console.log("category", category)
  const dispatch = useDispatch();
  

  // const filteredItemId = nanoid();
    // const itemsCategory = useSelector(getItemsByCategory);
    // console.log(itemsCategory)

    
    const {
      name, 
    
    _id,
    
  } = user;
// console.log(user)
// console.log(sectionsLive)

// useEffect(() => {
//      console.log("liveuser")
//   // dispatch(allUsers())
//   // dispatch(fetchSections());
  
// }, )
const buttons = [
  {
    btn: name,
    link: _id,
  }

];

  return (
    <>
     <li
        key={nanoid()}
      >{buttons.map(b => (
            // <Item key={btnId}>
              <NavLink 
              key={nanoid()}
              to={'/live/' + b.link} 
              name={b.link}>
                {b.btn}
              </NavLink>
              
            // </Item>
          ))}</li>
   
    </>
  )
}
