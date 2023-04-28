import React from 'react'
import { 
    // useSelector, 
    useDispatch } from 'react-redux';
// import { getItemsByCategory,
//   //  getItems
//    } from 'redux/items/items-selector';
import { Modal } from "components/Modal/Modal";
import scss from "./ItemInList.module.scss"
import { useState } from 'react';
import { deleteItem, 
  //  geItemsByCategory
  } from "redux/items/items-operation"; 
import { useLocation,
  //  useSearchParams
   } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { fetchSections } from "redux/sections/sections-operation"
   import { useEffect } from "react";
  import ModalItemDetail from '../ModalItemDetail/ModalItemDetail';
  import { itemUpdate, geItemsByCategory } from "redux/items/items-operation"; 
  import { Notify } from 'notiflix/build/notiflix-notify-aio';



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
      section,
    _id,
    itemImg,
  } = filteredItem;
// console.log(filteredContact)


// console.log("category", category)
// console.log("section", section)

const dispatch = useDispatch();


const [modalDeleteActive, setModalDeleteActive] = useState(false);
const [modalDetailActive, setModalDetailActive] = useState(false);

function closeModal () {
    setModalDeleteActive(false)
    setModalDetailActive(false)
    document.body.style.overflow = '';
  }
  function DelItem () {
    dispatch(deleteItem(_id));
    closeModal ();
  }
  // const chekItems = Boolean(filteredItem)
  // console.log(filteredItem)
  //   console.log(chekItems)

  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [itemsName, setItemsName] = useState('');
  const handleChange = (e) => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'itemsName':
        setItemsName ( e.currentTarget.value);
        break;
      default:
        break;
    }
  };

const handleSubmit = (e) => {

    e.preventDefault()
    const duplicateItems = itemsCategory.find(itemCategory => itemCategory.itemName.toLocaleLowerCase() === itemsName.toLocaleLowerCase());
  
   
      if (duplicateItems) {
        Notify.failure(`${itemName} is already in item`)
        // alert (`${name} is already in contact`)
        return
      }
      // if (description === "") {
      //   setSection (category)
      //   dispatch(addItems(
      //     {itemsName, price, section}
      //     ));
      //     setItemsName('');
      //   // setDescription('');
      //   setPrice('');
      //   setSection('');
      //   setModalActive(false);
      // }
      // else {
        // setSection (category)

        // console.log(_id)
        // console.log(itemsName)
        // console.log(dispatch(itemUpdate({_id, 
        //   itemName: itemsName}
        //  )))
        dispatch(itemUpdate({_id, itemName: itemsName} ));
            dispatch(geItemsByCategory({category: category}))
          setItemsName('');
          // setDescription('');
          // setPrice('');
          // setSection('');
          setModalDetailActive(false);
      // }
  }; 



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
        {/* <b>Description:</b>  {description} <br /> */}
        <b >Price:</b> {price} <br />
        {/* <b >img:</b> {itemImg} */}
        {/* <b>Section:</b> {section} */}
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

      <div
      onClick={e => e.stopPropagation()}
      // active={modalActive}
      >
        Do you really wont to delete?
          <button
          onClick={() => 
            
            {DelItem ()}} 
          >
            yes
          </button>
        
      </div>
          </Modal>
         )}
            { modalDetailActive && (
          <Modal
          onClick={() => closeModal ()}
          active={modalDetailActive}
          setActive={setModalDetailActive}
          
          >

          <ModalItemDetail 
          itemName={itemName}
          price={price}
          description={description}
          _id={_id}
          itemsCategory={itemsCategory}
          
          setModalDetailActive={setModalDetailActive}
          onSubmit={handleSubmit}
          onChange={handleChange}

          // onClick={e => e.stopPropagation()}
          />
          </Modal>
         )}
    </>
  )
}
