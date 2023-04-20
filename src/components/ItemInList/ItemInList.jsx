import React from 'react'
import { 
    // useSelector, 
    useDispatch } from 'react-redux';
// import { getContacts } from 'redux/contacts/contacts-selector';
import { Modal } from "components/Modal/Modal";
import scss from "./ItemInList.module.scss"
import { useState } from 'react';
import { deleteItem } from "redux/items/items-operation"; 

export default function ItemInList({filteredItem}) {

    // const contacts = useSelector(getContacts);
    const {
      itemName, 
      description,
      price,
    _id,
    itemImg,
  } = filteredItem;
// console.log(filteredContact)

const dispatch = useDispatch();

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
