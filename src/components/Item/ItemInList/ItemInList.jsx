import React from 'react'
// import { 
//     // useSelector, 
//     useDispatch } from 'react-redux';
// import { getItemsByCategory,
//   //  getItems
//    } from 'redux/items/items-selector';
import { Modal } from "components/Modal/Modal";
import scss from "./ItemInList.module.scss"
import { useState } from 'react';
// import { deleteItem, 
//   //  geItemsByCategory
//   } from "redux/items/items-operation"; 
// import { useLocation,
//   //  useSearchParams
//    } from 'react-router-dom';
import { nanoid } from 'nanoid';
// import { fetchSections } from "redux/sections/sections-operation"
  //  import { useEffect } from "react";
  import ModalItemDetail from '../ModalItemDetail/ModalItemDetail';
  import ModalItemDelete from '../ModalItemDelete/ModalItemDelete';
  // import { itemUpdate, geItemsByCategory } from "redux/items/items-operation"; 
  // import { Notify } from 'notiflix/build/notiflix-notify-aio';



export default function ItemInList({filteredItem, itemsCategory}) {
  // const location = useLocation();
  // const category = location.pathname.split('/')[2];
  

  const filteredItemId = nanoid();
    // const itemsCategory = useSelector(getItemsByCategory);
    // console.log(itemsCategory)

    
    const {
      itemName, 
      description,
      price,
      // section,
    _id,
    // itemImg,
  } = filteredItem;
// console.log(filteredContact)


// console.log("category", category)
// console.log("section", section)

// const dispatch = useDispatch();


const [modalDeleteActive, setModalDeleteActive] = useState(false);
const [modalDetailActive, setModalDetailActive] = useState(false);

function closeModal () {
    setModalDeleteActive(false)
    setModalDetailActive(false)
    document.body.style.overflow = '';
  }

  // const chekItems = Boolean(filteredItem)
  // console.log(filteredItem)
  //   console.log(chekItems)

  // const location = useLocation();
  // const category = location.pathname.split('/')[2];




  // useEffect(() => {
  //   // dispatch(fetchItems());
  //   dispatch(fetchSections());
  
    
  //     if (category === undefined) {
  //       console.log("undef")
  //     }
  //     else {
       
  //       dispatch(geItemsByCategory({category: category}))
  //     }
    
  //   }, 
  //    [ dispatch, itemName, ])







  return (
    <>
    
        {filteredItem && 
        <> 
        <button
        onClick={() => setModalDetailActive(true)}
        >
        <li className={scss.contactList} key={filteredItemId}> 
        <b>Name:</b>  {itemName} <br />
        
        <b >Price:</b> {price} <br />
        {/* <b >img:</b> {itemImg} */}
        </li>
        </button>
        <span className={scss.delContacts} 
        onClick={() => setModalDeleteActive(true)}>Delete</span>
        </>
        }
            
   { modalDeleteActive && (
          <Modal
          onClick={() => closeModal ()}
          active={modalDeleteActive}
          setActive={setModalDeleteActive}>
          <ModalItemDelete
          closeModal={closeModal}
          _id={_id}
          />
     
          </Modal>
         )}
            { modalDetailActive && (
          <Modal
          onClick={() => closeModal ()}
          active={modalDetailActive}
          setActive={setModalDetailActive}
          
          >

          <ModalItemDetail 
          // onClick={e => e.stopPropagation()}
          itemName={itemName}
          price={price}
          description={description}
          _id={_id}
          itemsCategory={itemsCategory}
          closeModal={closeModal}
          setModalDetailActive={setModalDetailActive}

          // onClick={e => e.stopPropagation()}
          />
          </Modal>
         )}
    </>
  )
}
