import React from 'react'
import { 
    // useSelector, 
    useDispatch } from 'react-redux';
// import { getContacts } from 'redux/contacts/contacts-selector';
import { Modal } from "components/Modal/Modal";
import scss from "./ContactList.module.scss"
import { useState } from 'react';
import { deleteContact } from "redux/contacts/contacts-operation"; 

export default function ContactsItem({filteredContact}) {

    // const contacts = useSelector(getContacts);
    const {
      name, 
      phone,
    _id,
  } = filteredContact;
console.log(filteredContact)

const dispatch = useDispatch();

const [modalActive, setModalActive] = useState(false);

function closeModal () {
    setModalActive(false)
    document.body.style.overflow = '';
  }
  return (
    <>
    <li className={scss.contactList} key={_id}> 
            <b>Name:</b>  {name} <br />
            <b className={scss.tel}>Tel:</b> {phone} 
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
      active={modalActive}>
        Do you really wont to delete?
          <button
          onClick={() => 
            
            { dispatch(deleteContact(_id))}} 
          >
            yes
          </button>
        
      </div>
          </Modal>
         )}
    </>
  )
}
