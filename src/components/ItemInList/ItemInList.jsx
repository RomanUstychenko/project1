import React from 'react'
import { 
    useSelector, 
    useDispatch } from 'react-redux';
import { getItemsByCategory,
  //  getItems
   } from 'redux/items/items-selector';
import { Modal } from "components/Modal/Modal";
import scss from "./ItemInList.module.scss"
import { useState } from 'react';
import { deleteItem, 
  //  geItemsByCategory
  } from "redux/items/items-operation"; 
// import { useLocation,
//   //  useSearchParams
//    } from 'react-router-dom';

  //  import { useEffect } from "react";

export default function ItemInList({filteredItem}) {
  // const location = useLocation();
  
  

  
    const itemsCategory = useSelector(getItemsByCategory);
    console.log(itemsCategory)

    
    const {
      itemName, 
      description,
      price,
      section,
    _id,
    itemImg,
  } = filteredItem;
// console.log(filteredContact)

// const category = location.pathname.split('/')[2];
// console.log("category", category)
console.log("section", section)

const dispatch = useDispatch();

// console.log(dispatch(geItemsByCategory))
// useEffect(() => {
//   // dispatch(fetchItems());
//   // if (category === undefined) {
//   //   console.log("undef")
//   // }
//   // else 
  
//   // {
//   //   console.log("else")
//   //   dispatch(geItemsByCategory({category: category}))
//   // }
//   // const itemsByCateg = () => {
//   //   if (category === undefined) {
//   //     console.log("undef")
//   //   }
//   //   else {
//   //     console.log("else")
//   if (category === "first") {dispatch(geItemsByCategory({category: category}))}
//   //   }
//   // }
//   }, 
//    [dispatch], category
//   );
// if (category === "first") {dispatch(geItemsByCategory({category: category}))}
// console.log(itemsCategory.filter(({section}) => section))
// dispatch(geItemsByCategory({category: category}))
const [modalActive, setModalActive] = useState(false);

function closeModal () {
    setModalActive(false)
    document.body.style.overflow = '';
  }
  return (
    <>

    <li className={scss.contactList} key={_id}> 
            <b>Name:</b>  {itemName} <br />
            <b>Description:</b>  {description} <br />
            <b >Price:</b> {price} <br />
            <b >img:</b> {itemImg}
            <b>Section:</b> {section}
            <span className={scss.delContacts} 
            onClick={() => setModalActive(true)}>Delete</span>
            
            </li>
            
   { modalActive && (
          <Modal
          onClick={() => closeModal ()}
          active={modalActive}
          setActive={setModalActive}>

      <div
      onClick={e => e.stopPropagation()}
      // active={modalActive}
      >
        Do you really wont to delete?
          <button
          onClick={() => 
            
            { dispatch(deleteItem(_id))}} 
          >
            yes
          </button>
        
      </div>
          </Modal>
         )}
    </>
  )
}
